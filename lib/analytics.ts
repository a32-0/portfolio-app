import type { AnalyticsEvent } from '@/data/analytics'

declare global {
  interface Window {
    umami?: { track: (event: string) => void }
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return
  window.umami?.track(event)
}
