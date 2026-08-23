export type ChatTurn = {
  role: 'user' | 'assistant'
  content: string
}

export type ChatProviderParams = {
  /** Persona + rules + knowledge base. Never user-controlled. */
  system: string
  /** Oldest first, already truncated to MAX_HISTORY_MESSAGES. */
  messages: ChatTurn[]
}

/** One adapter per provider, each normalizing its streaming format to plain UTF-8 text. */
export type ChatProvider = (params: ChatProviderParams) => Promise<ReadableStream<Uint8Array>>
