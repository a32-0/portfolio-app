'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEFAULT_WORK_VIEW, workViews, type WorkViewId } from '@/data/work'

type SiteNav = {
  activeWorkView: WorkViewId
  setActiveWorkView: (id: WorkViewId) => void
  isWorkDark: boolean
}

const SiteNavContext = createContext<SiteNav>({
  activeWorkView: DEFAULT_WORK_VIEW,
  setActiveWorkView: () => {},
  isWorkDark: false,
})

export const useSiteNav = () => useContext(SiteNavContext)
export default function SiteNavProvider({ children }: { children: ReactNode }) {
  const [activeWorkView, setActiveWorkView] = useState<WorkViewId>(DEFAULT_WORK_VIEW)
  const isWorkDark = workViews.find((view) => view.id === activeWorkView)?.theme === 'dark'

  return (
    <SiteNavContext.Provider value={{ activeWorkView, setActiveWorkView, isWorkDark }}>
      {children}
    </SiteNavContext.Provider>
  )
}
