import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  outlineColor?: 'black' | 'white'
  target?: string
  rel?: string
  className?: string
}

export default function Button({
  href,
  children,
  outlineColor = 'black',
  target,
  rel,
  className,
}: Props) {
  const outline = outlineColor === 'white' ? 'outline-white' : 'outline-black'
  const base = `btn-pill px-5 py-2 rounded-2xl outline-1 -outline-offset-1 ${outline}${className ? ` ${className}` : ''}`
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  )
}
