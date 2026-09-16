import type { AnalyticsEvent } from './analytics'
import { ANALYTICS_EVENTS } from './analytics'

export type SocialLink = {
  label: string
  href: string
  event?: AnalyticsEvent
}

export const socialLinks: SocialLink[] = [
  { label: 'Resume', href: '/docs/Product Designer_Armando Rojano.pdf', event: ANALYTICS_EVENTS.resume },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/armandorour/' },
]
