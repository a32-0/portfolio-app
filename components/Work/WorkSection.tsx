'use client'

import Container from '@/components/Container'
import { useSiteNav } from '@/components/SiteNavProvider'
import SelectedWork from './SelectedWork'
import ArchiveGrid from './ArchiveGrid'
import WorkNav from './WorkNav'

export default function WorkSection() {
  const { activeWorkView, isWorkDark } = useSiteNav()

  // Scroll offset: 16px under the 80px navbar, minus this section's own top padding.
  return (
    <section
      id="work"
      className={`w-full scroll-mt-16 sm:scroll-mt-12 sm:py-12 py-8 transition-colors duration-300 ${
        isWorkDark ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <Container className="flex flex-col items-center gap-12">
        <WorkNav />
        {activeWorkView === 'product' ? <SelectedWork /> : <ArchiveGrid />}
      </Container>
    </section>
  )
}
