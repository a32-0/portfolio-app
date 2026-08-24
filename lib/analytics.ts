import type { AnalyticsRoute } from '@/data/analytics'

/**
 * Vercel's script samples the URL asynchronously, so the real path can only go back after it
 * has read the pseudo-route. Measured: restoring in the same tick drops the event entirely,
 * 50ms is enough, and this leaves margin.
 */
const SETTLE_MS = 120

/**
 * Deferred so a link's own navigation lands first — otherwise the router overwrites the
 * pseudo-route before the script reads it, and the event is silently lost.
 */
const DEFER_MS = 60

/** Reports a click to Vercel Analytics as a page view on `route`, then restores the URL. */
export function trackRoute(route: AnalyticsRoute) {
  if (typeof window === 'undefined') return
  window.setTimeout(() => {
    const { pathname, search, hash } = window.location
    const current = pathname + search + hash
    window.history.replaceState(null, '', route)
    window.setTimeout(() => window.history.replaceState(null, '', current), SETTLE_MS)
  }, DEFER_MS)
}
