'use client'

/**
 * Conversation state and streaming for /api/chat. Splits the stream into the displayed answer
 * and the 3 follow-up suggestions the model appends after SUGGESTIONS_MARKER.
 *
 * Message ids come from a ref, never module scope: a module-level counter resets on Fast
 * Refresh while the state survives, reissuing ids that already exist — and since the streaming
 * update matches by id, a collision writes the same text into two bubbles.
 */
import { useCallback, useRef, useState } from 'react'
import { SUGGESTIONS_MARKER } from '@/lib/chatbot/constants'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function parseSuggestions(raw: string): string[] {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3)
}

export function useChatStream() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesRef = useRef<ChatMessage[]>(messages)
  messagesRef.current = messages
  const isLoadingRef = useRef(false)

  const idCounterRef = useRef(0)
  const nextId = () => `msg-${++idCounterRef.current}`

  const sendMessage = useCallback(async (content: string) => {
    const trimmed = content.trim()
    if (!trimmed || isLoadingRef.current) return

    setError(null)
    setSuggestions([]) // clear stale suggestions the instant a new turn starts
    const userMessage: ChatMessage = { id: nextId(), role: 'user', content: trimmed }
    const assistantId = nextId()
    const history = messagesRef.current

    setMessages([...history, userMessage, { id: assistantId, role: 'assistant', content: '' }])
    setIsLoading(true)
    isLoadingRef.current = true

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // stripped display text, never the raw marker + suggestions
          messages: [...history, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      })

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.message || data?.error || 'Something went wrong. Please try again.')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''
      let markerIndex = -1

      const applyDisplay = (finalFlush: boolean) => {
        if (markerIndex === -1) {
          markerIndex = accumulated.indexOf(SUGGESTIONS_MARKER)
        }

        let displayText: string
        if (markerIndex !== -1) {
          displayText = accumulated.slice(0, markerIndex).trimEnd()
        } else if (finalFlush) {
          // marker never arrived; show everything rather than stranding the held-back tail
          displayText = accumulated
        } else {
          // hold back a marker's length so one split across chunks never flashes on screen
          const safeLength = Math.max(0, accumulated.length - SUGGESTIONS_MARKER.length)
          displayText = accumulated.slice(0, safeLength)
        }

        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content: displayText } : m)),
        )
      }

      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        applyDisplay(false)
      }
      applyDisplay(true)

      if (markerIndex !== -1) {
        setSuggestions(parseSuggestions(accumulated.slice(markerIndex + SUGGESTIONS_MARKER.length)))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setMessages((prev) => prev.filter((m) => m.id !== assistantId || m.content.length > 0))
    } finally {
      setIsLoading(false)
      isLoadingRef.current = false
    }
  }, [])

  return { messages, suggestions, sendMessage, isLoading, error }
}

export type ChatStream = ReturnType<typeof useChatStream>
