'use client'

import { useEffect, useRef, useState } from 'react'
import { CHAT_NAME, CHAT_WELCOME_MESSAGE, INITIAL_SUGGESTIONS, LOADING_PHRASES } from '@/data/chatbot/ui'
import type { ChatStream } from './useChatStream'
import { useKeyboardInset } from './useKeyboardInset'
import ChatHeader from './ChatHeader'
import WelcomeMessage from './WelcomeMessage'
import UserMessage from './UserMessage'
import BotMessage from './BotMessage'
import SuggestionsList from './SuggestionsList'
import ChatComposer from './ChatComposer'

type Props = {
  isOpen: boolean
  onClose: () => void
  chat: ChatStream
}

export default function ChatDrawer({ isOpen, onClose, chat }: Props) {
  const { messages, suggestions, sendMessage, isLoading, error } = chat
  const keyboardInset = useKeyboardInset()
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const [loadingPhrase, setLoadingPhrase] = useState(LOADING_PHRASES[0])
  const wasLoading = useRef(false)
  useEffect(() => {
    if (isLoading && !wasLoading.current) {
      setLoadingPhrase(LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)])
    }
    wasLoading.current = isLoading
  }, [isLoading])

  const hasStarted = messages.length > 0
  const activeSuggestions = hasStarted ? suggestions : INITIAL_SUGGESTIONS
  const lastMessage = messages[messages.length - 1]
  const isAwaitingFirstToken = isLoading && !lastMessage?.content

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  const submit = () => {
    if (!input.trim() || isLoading) return
    sendMessage(input)
    setInput('')
  }

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Chat with ${CHAT_NAME}`}
        inert={!isOpen}
        style={keyboardInset ? { paddingBottom: keyboardInset + 16 } : undefined}
        className={`bg-chat-bg fixed inset-y-0 right-0 z-50 flex w-full flex-col gap-4 p-4 transition-[translate,opacity,visibility] duration-300 ease-out motion-reduce:transition-none sm:w-120 ${
          isOpen ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-full opacity-0'
        }`}
      >
        <ChatHeader onClose={onClose} />

        <div
          ref={scrollRef}
          className="chat-scroll flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-2"
        >
          {!hasStarted && <WelcomeMessage isLive={isOpen}>{CHAT_WELCOME_MESSAGE}</WelcomeMessage>}

          {messages.map((message) =>
            message.role === 'user' ? (
              <UserMessage key={message.id}>{message.content}</UserMessage>
            ) : (
              message.content.length > 0 && (
                <BotMessage
                  key={message.id}
                  className="text-chat-text whitespace-pre-wrap"
                  isThinking={isLoading && message.id === lastMessage?.id}
                >
                  {message.content}
                </BotMessage>
              )
            ),
          )}

          {isAwaitingFirstToken && (
            <BotMessage className="text-chat-text-muted" isThinking>
              {loadingPhrase}
              <span aria-hidden="true">
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
              </span>
            </BotMessage>
          )}

          {error && (
            <p className="rounded-[30px] bg-red-950 px-4 py-3 text-sm text-red-300">{error}</p>
          )}

          {!isLoading && <SuggestionsList suggestions={activeSuggestions} onSelect={sendMessage} />}
        </div>

        <ChatComposer
          value={input}
          onChange={setInput}
          onSubmit={submit}
          isLoading={isLoading}
          focusTrigger={isOpen}
        />
      </div>
    </>
  )
}
