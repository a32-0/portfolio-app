/**
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
