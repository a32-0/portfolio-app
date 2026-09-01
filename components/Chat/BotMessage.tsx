import Image from 'next/image'
import type { ReactNode } from 'react'

/** Logo + text row, shared by the loading phrase and every answer. */
type Props = {
  children: ReactNode
  className?: string
}

export default function BotMessage({ children, className = '' }: Props) {
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
