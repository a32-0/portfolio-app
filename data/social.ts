import type { AnalyticsRoute } from './analytics'
import { ANALYTICS_ROUTES } from './analytics'

export type SocialLink = {
  label: string
  href: string
  /** Pseudo-route reported on click, for links analytics can't otherwise see. */
  event?: AnalyticsRoute
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/armandorour/' },
  { label: 'Resume', href: '/docs/Product Designer_Armando Rojano.pdf', event: ANALYTICS_ROUTES.resume },
]
