/**
 * Claude Haiku 4.5 adapter. The system prompt is cached, being identical on every request.
 *
 * Client built lazily: the SDK throws on a missing key at construction, and this module is
 * evaluated on every deploy regardless of which provider is active.
 */
import Anthropic from '@anthropic-ai/sdk'
import { CHAT_MODELS, MAX_OUTPUT_TOKENS, TEMPERATURE } from '@/lib/chatbot/constants'
import type { ChatProvider } from './types'

let client: Anthropic | undefined
function getClient() {
  if (!client) client = new Anthropic()
  return client
}

export const anthropicProvider: ChatProvider = async ({ system, messages }) => {
  const stream = getClient().messages.stream({
    model: CHAT_MODELS.anthropic,
    max_tokens: MAX_OUTPUT_TOKENS,
    temperature: TEMPERATURE,
    system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  })

  const encoder = new TextEncoder()

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
        controller.close()
      } catch (err) {
        controller.error(err)
      }
    },
    cancel() {
      stream.abort()
    },
  })
}
