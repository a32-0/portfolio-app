// components/Background.tsx
import { ReactNode } from 'react'

type BackgroundProps = {
  children: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return <div className="w-full bg-secondary">{children}</div>
}
