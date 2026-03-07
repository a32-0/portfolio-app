import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function FooterLayout({ children }: Props) {
  return (
    <div className="mx-auto inline-flex h-full w-full flex-col items-center justify-end gap-3 overflow-hidden">
      {children}
    </div>
  )
}
