'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEFAULT_WORK_VIEW, workViews, type WorkViewId } from '@/data/work'

type SiteNav = {
  activeWorkView: WorkViewId
  setActiveWorkView: (id: WorkViewId) => void
  /** The active work view renders on a dark background. */
  isWorkDark: boolean
}

const SiteNavContext = createContext<SiteNav>({
  activeWorkView: DEFAULT_WORK_VIEW,
  setActiveWorkView: () => {},
  isWorkDark: false,
})

export const useSiteNav = () => useContext(SiteNavContext)

/**
 * The active work view. Lives here because the main nav and the work section both depend on
 * it — one for its background colour, the other for its content — and they sit in separate
 * trees, one in the layout and one in the page.
 */
export default function SiteNavProvider({ children }: { children: ReactNode }) {
  const [activeWorkView, setActiveWorkView] = useState<WorkViewId>(DEFAULT_WORK_VIEW)
  const isWorkDark = workViews.find((view) => view.id === activeWorkView)?.theme === 'dark'

  return (
    <SiteNavContext.Provider value={{ activeWorkView, setActiveWorkView, isWorkDark }}>
      {children}
    </SiteNavContext.Provider>
  )
}
