import { DEFAULT_CHAT_PROVIDER } from '@/lib/chatbot/constants'
import { anthropicProvider } from './anthropic'
import { openaiProvider } from './openai'
import { googleProvider } from './google'
import type { ChatProvider } from './types'

const providers: Record<string, { provider: ChatProvider; apiKeyEnvVar: string }> = {
  anthropic: { provider: anthropicProvider, apiKeyEnvVar: 'ANTHROPIC_API_KEY' },
  openai: { provider: openaiProvider, apiKeyEnvVar: 'OPENAI_API_KEY' },
  google: { provider: googleProvider, apiKeyEnvVar: 'GEMINI_API_KEY' },
}

/** Reads CHAT_PROVIDER. Swapping providers is just an env var change. */
export function getActiveProvider(): ChatProvider {
  const key = (process.env.CHAT_PROVIDER || DEFAULT_CHAT_PROVIDER).toLowerCase()
  const entry = providers[key]

  if (!entry) {
    throw new Error(
      `Unknown CHAT_PROVIDER "${key}". Expected one of: ${Object.keys(providers).join(', ')}.`,
    )
  }
  if (!process.env[entry.apiKeyEnvVar]) {
    throw new Error(
      `CHAT_PROVIDER is "${key}" but ${entry.apiKeyEnvVar} is not set. Add it in your environment (see .env.example).`,
    )
  }

  return entry.provider
}
