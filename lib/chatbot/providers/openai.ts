import OpenAI from 'openai'
import { CHAT_MODELS, MAX_OUTPUT_TOKENS } from '@/lib/chatbot/constants'
import type { ChatProvider } from './types'

// Lazy — see providers/anthropic.ts.
let client: OpenAI | undefined
function getClient() {
  if (!client) client = new OpenAI()
  return client
}

/** GPT-5 nano. This family requires `max_completion_tokens` (not `max_tokens`) and rejects
 * any `temperature` other than the default. */
export const openaiProvider: ChatProvider = async ({ system, messages }) => {
  const stream = await getClient().chat.completions.create({
    model: CHAT_MODELS.openai,
    max_completion_tokens: MAX_OUTPUT_TOKENS,
    stream: true,
    messages: [
      { role: 'system', content: system },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
  })

  const encoder = new TextEncoder()

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices[0]?.delta?.content
          if (delta) controller.enqueue(encoder.encode(delta))
        }
        controller.close()
      } catch (err) {
        controller.error(err)
      }
    },
    cancel() {
      // Stops billing when the visitor abandons mid-stream.
      stream.controller.abort()
    },
  })
}
