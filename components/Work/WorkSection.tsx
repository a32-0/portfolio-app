'use client'

import Container from '@/components/Container'
import { useSiteNav } from '@/components/SiteNavProvider'
import SelectedWork from './SelectedWork'
import ArchiveGrid from './ArchiveGrid'
import WorkNav from './WorkNav'

export default function WorkSection() {
  const { activeWorkView, isWorkDark } = useSiteNav()

  return (
    <section
      id="work"
      className={`w-full scroll-mt-24 sm:py-12 py-8 transition-colors duration-300 ${
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
