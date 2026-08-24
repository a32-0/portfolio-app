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

/** Anchor that reports its click as a page view. Lets a server component keep a tracked link
 * without becoming a client component itself. */
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
