'use client'

import Button from '@/components/ui/Button'
import { useSiteNav } from '@/components/SiteNavProvider'
import { workViews } from '@/data/work'
import { trackRoute } from '@/lib/analytics'

/** Secondary nav for the work views. Sits in the flow and scrolls with the page. */
export default function WorkNav() {
  const { activeWorkView, setActiveWorkView, isWorkDark } = useSiteNav()

  return (
    <div
      className={`flex w-full flex-wrap items-center justify-center gap-4 rounded-[30px] p-4 outline-1 -outline-offset-1 transition-[background-color,outline-color] duration-300 md:p-6 ${
        isWorkDark ? 'bg-black outline-white' : 'bg-white outline-tertiary'
      }`}
    >
      {workViews.map((view) => {
        const isActive = view.id === activeWorkView
        return (
          <Button
            key={view.id}
            variant={isActive ? 'solid' : 'outline'}
            tone={view.tone}
            outlineColor={isWorkDark ? 'white' : 'black'}
            onClick={() => {
              setActiveWorkView(view.id)
              if (view.event && view.id !== activeWorkView) trackRoute(view.event)
            }}
            aria-current={isActive ? 'true' : undefined}
          >
            {view.label}
          </Button>
        )
      })}
    </div>
  )
}
