export type ChatTurn = {
  role: 'user' | 'assistant'
  content: string
}

export type ChatProviderParams = {
  system: string
  messages: ChatTurn[]
}

export type ChatProvider = (params: ChatProviderParams) => Promise<ReadableStream<Uint8Array>>
