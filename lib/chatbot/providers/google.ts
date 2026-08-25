/**
 * Gemini Flash-Lite adapter. Prior assistant turns use the role name `model`, not `assistant`.
 * Thinking is forced to MINIMAL: Gemini 3 defaults to "high", which cost ~2.5s of dead air
 * before the first token. Client built lazily — see anthropic.ts.
 */
import { GoogleGenAI, ThinkingLevel } from '@google/genai'
import { CHAT_MODELS, MAX_OUTPUT_TOKENS, TEMPERATURE } from '@/lib/chatbot/constants'
import type { ChatProvider } from './types'

let ai: GoogleGenAI | undefined
function getClient() {
  if (!ai) ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  return ai
}

export const googleProvider: ChatProvider = async ({ system, messages }) => {
  const stream = await getClient().models.generateContentStream({
    model: CHAT_MODELS.google,
    contents: messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    config: {
      systemInstruction: system,
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: TEMPERATURE,
      thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
    },
  })

  const encoder = new TextEncoder()

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text))
        }
        controller.close()
      } catch (err) {
        controller.error(err)
      }
    },
  })
}
