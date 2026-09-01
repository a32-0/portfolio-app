'use client'

import { useEffect, useRef, type FormEvent, type KeyboardEvent } from 'react'
import IconButton from '@/components/ui/IconButton'
import { ArrowUpIcon } from '@/components/ui/icons'

type Props = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
  focusTrigger: boolean
}

export default function ChatComposer({ value, onChange, onSubmit, isLoading, focusTrigger }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (focusTrigger) inputRef.current?.focus()
  }, [focusTrigger])

  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-chat-surface mb-[env(safe-area-inset-bottom)] flex shrink-0 items-center gap-6 rounded-[30px] px-6 py-2 sm:min-h-20 sm:py-4"
    >
      <textarea
        ref={inputRef}
        rows={1}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about Armando..."
        maxLength={1500}
        className="text-chat-text placeholder:text-chat-text-dim max-h-42.75 flex-1 resize-none overflow-y-auto bg-transparent text-base outline-none sm:max-h-38.75"
      />
      <div className="flex shrink-0 items-end self-stretch sm:self-auto">
        <IconButton
          type="submit"
          disabled={isLoading || !value.trim()}
          label="Send message"
          size="sm"
          className="sm:h-12 sm:w-12"
        >
          <ArrowUpIcon />
        </IconButton>
      </div>
    </form>
  )
}
