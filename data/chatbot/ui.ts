/** Chat UI copy. Edit text here, not in components/Chat/. */

export const CHAT_NAME = 'CatarsisLLM'

export const CHAT_WELCOME_MESSAGE =
  "Hey there! I'm CatarsisLLM, Armando's assistant. Ask me anything about his experience, projects, or how to get in touch."

/** Exactly 3, matching what the model returns after every answer, so the panel never reflows. */
export const INITIAL_SUGGESTIONS = [
  "Give me the 30-second version of his experience",
  "How did he cut a 35-minute task down to 3 minutes?",
  "How do you design a product with no screens?",
]

/** Picked at random per turn. No trailing ellipsis — the drawer animates its own three dots. */
export const LOADING_PHRASES = [
  "Remembering what Armando wrote",
  "Searching through Armando's brain",
  "Asking Armando personally",
  "Checking Armando's notes",
  "Digging through the case studies",
  "Double-checking with Armando",
  "Pulling this from the archive",
  "Giving this some real thought",
  "Consulting the source directly",
  "Flipping back through the portfolio",
]
