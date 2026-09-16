export const UMAMI_SRC = 'https://cloud.umami.is/script.js'
export const UMAMI_WEBSITE_ID = '066dc0e7-ac3f-4b57-8345-5bc19b4bb25b'

export const ANALYTICS_EVENTS = {
  productDesign: 'product-design',
  visualDesign: 'visual-design',
  chatOpen: 'catarsis-chat',
  resume: 'resume',
} as const

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]
