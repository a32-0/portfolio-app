import type { AnalyticsEvent } from '@/data/analytics'

declare global {
  interface Window {
    umami?: { track: (event: string) => void }
  }
}

/**
 * Reports a click to Umami. The script is deferred and blockable, so `umami` may never
 * exist — tracking is best effort and must never break the handler that calls it.
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return
  window.umami?.track(event)
}
