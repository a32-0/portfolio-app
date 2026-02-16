import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function FooterLayout({ children }: Props) {
  return (
    <div className="mx-auto inline-flex h-full w-full flex-col items-center justify-start gap-12 overflow-hidden pt-12">
      {children}
    </div>
  )
}
