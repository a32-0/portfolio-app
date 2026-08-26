/** Umami Cloud script. The website id is public — it ships in the client tag. */
export const UMAMI_SRC = 'https://cloud.umami.is/script.js'
export const UMAMI_WEBSITE_ID = '066dc0e7-ac3f-4b57-8345-5bc19b4bb25b'

/** Custom events reported to Umami, for clicks that don't produce a page view. */
export const ANALYTICS_EVENTS = {
  workNav: 'work-nav',
  productDesign: 'product-design',
  visualDesign: 'visual-design',
  chatOpen: 'catarsis-chat',
  resume: 'resume',
} as const

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]
