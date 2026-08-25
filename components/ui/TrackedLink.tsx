'use client'

import type { ReactNode } from 'react'
import type { AnalyticsRoute } from '@/data/analytics'
import { trackRoute } from '@/lib/analytics'

type Props = {
  href: string
  event: AnalyticsRoute
  children: ReactNode
  target?: string
  rel?: string
  className?: string
}

export default function TrackedLink({ href, event, children, target, rel, className }: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => trackRoute(event)}
    >
      {children}
    </a>
  )
}
