/**
 * Tuning knobs for the chatbot: cost, limits, behavior.
 *
 * TEMPERATURE is deliberately low so the bot doesn't improvise facts, and is skipped for
 * OpenAI, which rejects any value but the default. RATE_LIMIT is sized against Gemini's
 * 500 requests/day: 8 × 24h caps one IP at 192/day.
 */

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

/** Looser than MAX_MESSAGE_LENGTH so a full reply survives being echoed back as history. */
export const MAX_HISTORY_MESSAGE_LENGTH = MAX_OUTPUT_TOKENS * 6

export const RATE_LIMIT_REQUESTS = 8
export const RATE_LIMIT_WINDOW = '1 h'

/** Lives here, not in system-prompt.ts, so the client can import it without pulling the
 * knowledge base into the browser bundle. */
export const SUGGESTIONS_MARKER = '§§§SUGGESTIONS§§§'
