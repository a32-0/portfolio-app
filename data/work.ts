import type { AnalyticsEvent } from './analytics'
import { ANALYTICS_EVENTS } from './analytics'

export type WorkViewId = 'product' | 'visual'

export type WorkView = {
  id: WorkViewId
  label: string
  theme: 'light' | 'dark'
  tone: 'primary' | 'teal'
  event?: AnalyticsEvent
}

export const workViews: WorkView[] = [
  {
    id: 'product',
    label: 'Product Design',
    theme: 'light',
    tone: 'primary',
    event: ANALYTICS_EVENTS.productDesign,
  },
  {
    id: 'visual',
    label: 'Visual Design',
    theme: 'dark',
    tone: 'teal',
    event: ANALYTICS_EVENTS.visualDesign,
  },
]

export const DEFAULT_WORK_VIEW: WorkViewId = 'product'
