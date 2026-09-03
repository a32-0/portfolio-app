import Logo from '@/components/ui/Logo'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isLive?: boolean
}

export default function WelcomeMessage({ children, isLive = false }: Props) {
  return (
    <div className="mx-auto flex w-96 max-w-full flex-col items-center">
      <div className="flex items-center justify-center gap-2 p-2">
        <Logo size={40} animation={isLive ? 'staring' : 'rest'} />
      </div>
      <div className="text-chat-text self-stretch py-2 pr-2 text-center text-xl">{children}</div>
    </div>
  )
}
