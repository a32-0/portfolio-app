import Logo from '@/components/ui/Logo'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  isThinking?: boolean
}

export default function BotMessage({ children, className = '', isThinking = false }: Props) {
  return (
    <div className="flex items-start">
      <div className="shrink-0 p-2">
        <Logo size={24} animation={isThinking ? 'thinking' : 'rest'} />
      </div>
      <div className={`flex-1 py-2 pr-2 text-base ${className}`}>{children}</div>
    </div>
  )
}
