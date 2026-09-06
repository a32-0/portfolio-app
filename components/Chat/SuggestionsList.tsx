type Props = {
  suggestions: string[]
  onSelect: (prompt: string) => void
}

export default function SuggestionsList({ suggestions, onSelect }: Props) {
  if (suggestions.length === 0) return null

  return (
    <div className="mt-2 flex flex-col gap-3">
      {suggestions.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className="bg-chat-surface text-chat-text-muted rounded-[30px] px-4 py-3 text-left text transition-colors hover:bg-white/5"
        >
          ↳ {prompt}
        </button>
      ))}
    </div>
  )
}
