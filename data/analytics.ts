/**
 * Pseudo-routes for interactions Vercel Analytics can't see: the Hobby plan has no custom
 * events, but it does count a page view whenever the URL changes. Firing one of these reports
 * a click as a view (see lib/analytics.ts).
 *
 * The /e/ prefix keeps them grouped apart from real pages in the dashboard, and
 * next.config.ts redirects it so a stray visit never 404s.
 *
 * Cost per tracked click: two page views — the pseudo-route and the restored real one. Only
 * instrument what you'd actually act on.
 */
export const ANALYTICS_ROUTES = {
  workNav: '/e/work',
  productDesign: '/e/product-design',
  visualDesign: '/e/visual-design',
  chatOpen: '/e/catarsis-chat',
  resume: '/e/resume',
} as const

export type AnalyticsRoute = (typeof ANALYTICS_ROUTES)[keyof typeof ANALYTICS_ROUTES]
