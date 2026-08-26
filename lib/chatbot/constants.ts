export const DEFAULT_CHAT_PROVIDER = 'anthropic'

export const CHAT_MODELS = {
  anthropic: 'claude-haiku-4-5',
  openai: 'gpt-5-nano',
  google: 'gemini-3.5-flash-lite',
} as const

export const MAX_OUTPUT_TOKENS = 1024
export const TEMPERATURE = 0.7
export const MAX_MESSAGE_LENGTH = 1500
export const MAX_HISTORY_MESSAGES = 16
export const MAX_HISTORY_MESSAGE_LENGTH = MAX_OUTPUT_TOKENS * 6
export const RATE_LIMIT_REQUESTS = 8
export const RATE_LIMIT_WINDOW = '1 h'
export const SUGGESTIONS_MARKER = '§§§SUGGESTIONS§§§'
