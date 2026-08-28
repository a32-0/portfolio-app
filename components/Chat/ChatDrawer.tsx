'use client'

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import Image from 'next/image'
import {
  CHAT_NAME,
  CHAT_WELCOME_MESSAGE,
  INITIAL_SUGGESTIONS,
  LOADING_PHRASES,
} from '@/data/chatbot/ui'
import IconButton from '@/components/ui/IconButton'
import { ArrowUpIcon, CloseIcon } from '@/components/ui/icons'
import type { ChatStream } from './useChatStream'
import { useKeyboardInset } from './useKeyboardInset'

type Props = {
  isOpen: boolean
  onClose: () => void
  chat: ChatStream
}

/** Logo + text row, shared by the greeting, the loading phrase, and every answer. */
function BotRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex items-start">
      <div className="shrink-0 p-2">
        <Image
          src="/icons/catarsis.svg"
          width={24}
          height={24}
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      </div>
      <div className={`flex-1 py-2 pr-2 text-base ${className}`}>{children}</div>
    </div>
  )
}

export default function ChatDrawer({ isOpen, onClose, chat }: Props) {
  const { messages, suggestions, sendMessage, isLoading, error } = chat
  const keyboardInset = useKeyboardInset()
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
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
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  const submit = () => {
    if (!input.trim() || isLoading) return
    sendMessage(input)
    setInput('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      submit()
    }
  }

  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [input])

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
        <div className="bg-chat-surface text-chat-text flex h-12 shrink-0 items-center justify-between rounded-[30px] px-6 sm:h-20">
          <span className="text-[18px]">{CHAT_NAME}</span>
          <IconButton onClick={onClose} label="Close chat" size="sm" className="sm:h-12 sm:w-12">
            <CloseIcon />
          </IconButton>
        </div>

        <div
          ref={scrollRef}
          className="chat-scroll flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-2"
        >
          {!hasStarted && <BotRow className="text-chat-text">{CHAT_WELCOME_MESSAGE}</BotRow>}

          {messages.map((message) =>
            message.role === 'user' ? (
              <div
                key={message.id}
                className="bg-chat-accent text-chat-text max-w-75 self-end rounded-[30px] rounded-tr-none px-4 py-3 text-base whitespace-pre-wrap"
              >
                {message.content}
              </div>
            ) : (
              message.content.length > 0 && (
                <BotRow key={message.id} className="text-chat-text whitespace-pre-wrap">
                  {message.content}
                </BotRow>
              )
            )
          )}

          {isAwaitingFirstToken && (
            <BotRow className="text-chat-text-muted">
              {loadingPhrase}
              <span aria-hidden="true">
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
                <span className="ellipsis-dot">.</span>
              </span>
            </BotRow>
          )}

          {error && (
            <p className="rounded-[30px] bg-red-950 px-4 py-3 text-sm text-red-300">{error}</p>
          )}

          {!isLoading && activeSuggestions.length > 0 && (
            <div className="border-chat-divider my-2 border-t" />
          )}

          {!isLoading &&
            activeSuggestions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="text-chat-text-muted rounded-[30px] px-4 py-3 text-left text-base transition-colors hover:bg-white/5"
              >
                ↳ {prompt}
              </button>
            ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-chat-surface mb-[env(safe-area-inset-bottom)] flex shrink-0 items-center gap-6 rounded-[30px] px-6 py-2 sm:min-h-20 sm:py-4"
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Armando..."
            maxLength={1500}
            className="text-chat-text placeholder:text-chat-text-dim max-h-42.75 flex-1 resize-none overflow-y-auto bg-transparent text-base outline-none sm:max-h-38.75"
          />
          <div className="flex shrink-0 items-end self-stretch sm:self-auto">
            <IconButton
              type="submit"
              disabled={isLoading || !input.trim()}
              label="Send message"
              size="sm"
              className="sm:h-12 sm:w-12"
            >
              <ArrowUpIcon />
            </IconButton>
          </div>
        </form>
      </div>
    </>
  )
}
