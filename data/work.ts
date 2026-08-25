import type { AnalyticsRoute } from './analytics'
import { ANALYTICS_ROUTES } from './analytics'

export type WorkViewId = 'product' | 'visual'

export type WorkView = {
  id: WorkViewId
  label: string
  theme: 'light' | 'dark'
  tone: 'primary' | 'teal'
  event?: AnalyticsRoute
}

export const workViews: WorkView[] = [
  {
    id: 'product',
    label: 'Product Design',
    theme: 'light',
    tone: 'primary',
    event: ANALYTICS_ROUTES.productDesign,
  },
  {
    id: 'visual',
    label: 'Visual Design',
    theme: 'dark',
    tone: 'teal',
    event: ANALYTICS_ROUTES.visualDesign,
  },
]

export const DEFAULT_WORK_VIEW: WorkViewId = 'product'
