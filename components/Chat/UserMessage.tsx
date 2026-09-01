import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function UserMessage({ children }: Props) {
  return (
    <div className="bg-chat-accent text-chat-text max-w-75 self-end rounded-[30px] rounded-tr-none px-4 py-3 text-base whitespace-pre-wrap">
      {children}
    </div>
  )
}
