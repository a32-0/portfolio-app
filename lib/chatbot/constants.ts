/** Tuning knobs for the chatbot — cost, limits, and behavior all live here. */

export const DEFAULT_CHAT_PROVIDER = 'anthropic'

export const CHAT_MODELS = {
  anthropic: 'claude-haiku-4-5',
  openai: 'gpt-5-nano',
  google: 'gemini-3.5-flash-lite',
} as const

/** Max response length. */
export const MAX_OUTPUT_TOKENS = 1024

/** Low on purpose: this bot must not improvise facts. Not applied to OpenAI — gpt-5-nano
 * rejects any temperature other than the default. */
export const TEMPERATURE = 0.4

/** Max length of a new user message. */
export const MAX_MESSAGE_LENGTH = 1500

/** Looser ceiling for echoed-back history, so a full-length reply survives the round trip. */
export const MAX_HISTORY_MESSAGE_LENGTH = MAX_OUTPUT_TOKENS * 6

/** Prior turns sent upstream. Truncated server-side, whatever the client sends. */
export const MAX_HISTORY_MESSAGES = 16

/** Per-IP rate limit. */
export const RATE_LIMIT_REQUESTS = 20
export const RATE_LIMIT_WINDOW = '1 h'

/** Separates the answer from the 3 follow-up suggestions. Lives here (not system-prompt.ts)
 * so the client can import it without pulling the knowledge base into the browser bundle. */
export const SUGGESTIONS_MARKER = '§§§SUGGESTIONS§§§'
