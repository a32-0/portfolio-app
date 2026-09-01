type Props = {
  suggestions: string[]
  onSelect: (prompt: string) => void
}

export default function SuggestionsList({ suggestions, onSelect }: Props) {
  if (suggestions.length === 0) return null

  return (
    <>
      <div className="border-chat-divider my-2 border-t" />
      {suggestions.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className="text-chat-text-muted rounded-[30px] px-4 py-3 text-left text-base transition-colors hover:bg-white/5"
        >
          ↳ {prompt}
        </button>
      ))}
    </>
  )
}
