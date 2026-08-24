import type { AnalyticsRoute } from './analytics'
import { ANALYTICS_ROUTES } from './analytics'

export type WorkViewId = 'product' | 'visual'

export type WorkView = {
  id: WorkViewId
  label: string
  /** Dark views flip the section's background. */
  theme: 'light' | 'dark'
  /** Fixed per view, not per theme: this view's pill fills with it when active or hovered. */
  tone: 'primary' | 'teal'
  /** Pseudo-route reported when this view is selected. */
  event?: AnalyticsRoute
}

/** 'game' is intentionally absent until that work exists. */
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
