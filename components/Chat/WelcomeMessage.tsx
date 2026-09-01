import Image from 'next/image'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function WelcomeMessage({ children }: Props) {
  return (
    <div className="mx-auto flex w-96 max-w-full flex-col items-center">
      <div className="flex items-center justify-center gap-2 p-2">
        <Image
          src="/icons/catarsis.svg"
          width={40}
          height={40}
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      </div>
      <div className="text-chat-text self-stretch py-2 pr-2 text-center text-base md:text-xl">
        {children}
      </div>
    </div>
  )
}
