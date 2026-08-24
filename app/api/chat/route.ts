/**
 * Chat endpoint. Validates the payload, rate-limits by IP, then streams the active provider's
 * reply back as plain text.
 */
import type { NextRequest } from 'next/server'
import { getActiveProvider } from '@/lib/chatbot/providers'
import type { ChatTurn } from '@/lib/chatbot/providers/types'
import { getSystemPrompt } from '@/lib/chatbot/system-prompt'
import { checkRateLimit } from '@/lib/chatbot/rate-limit'
import {
  MAX_MESSAGE_LENGTH,
  MAX_HISTORY_MESSAGE_LENGTH,
  MAX_HISTORY_MESSAGES,
} from '@/lib/chatbot/constants'

export const maxDuration = 30 // well under Vercel's 300s default

function isChatTurn(value: unknown, maxLength: number): value is ChatTurn {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>
  return (
    (v.role === 'user' || v.role === 'assistant') &&
    typeof v.content === 'string' &&
    v.content.length > 0 &&
    v.content.length <= maxLength
  )
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const rawMessages = (body as { messages?: unknown })?.messages
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return Response.json({ error: 'messages must be a non-empty array.' }, { status: 400 })
  }
  if (!rawMessages.every((m) => isChatTurn(m, MAX_HISTORY_MESSAGE_LENGTH))) {
    return Response.json(
      { error: 'One or more messages are malformed or too long.' },
      { status: 400 }
    )
  }

  const messages = (rawMessages as ChatTurn[]).slice(-MAX_HISTORY_MESSAGES)
  const lastMessage = messages[messages.length - 1]
  if (lastMessage.role !== 'user') {
    return Response.json({ error: 'The last message must be from the user.' }, { status: 400 })
  }
  if (lastMessage.content.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Please keep your question under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    )
  }

  const ip = getClientIp(request)
  try {
    const { success } = await checkRateLimit(ip)
    if (!success) {
      return Response.json(
        {
          error: 'rate_limited',
          message:
            "You've hit the limit of questions for now, please try again in a bit, or email armando_rour@outlook.com directly.",
        },
        { status: 429 }
      )
    }
  } catch (err) {
    console.error('[chat] rate limit check failed:', err)
    return Response.json({ error: 'The chat is temporarily unavailable.' }, { status: 500 })
  }

  let provider
  try {
    provider = getActiveProvider()
  } catch (err) {
    console.error('[chat] provider config error:', err)
    return Response.json({ error: 'The chat is temporarily unavailable.' }, { status: 500 })
  }

  try {
    const stream = await provider({ system: getSystemPrompt(), messages })
    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err) {
    console.error('[chat] provider request failed:', err)
    return Response.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 502 }
    )
  }
}
