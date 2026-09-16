'use client'

import Container from '@/components/Container'
import { useSiteNav } from '@/components/SiteNavProvider'
import ProductDesignList from './ProductDesignList'
import VisualDesignGrid from './VisualDesignGrid'
import WorkNav from './WorkNav'

export default function WorkSection() {
  const { activeWorkView, isWorkDark } = useSiteNav()

  return (
    <section
      id="work"
      className={`w-full scroll-mt-16 sm:scroll-mt-12 sm:py-12 py-8 transition-colors duration-300 ${
        isWorkDark ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <Container className="flex flex-col items-center gap-12">
        <WorkNav />
        {activeWorkView === 'product' ? <ProductDesignList /> : <VisualDesignGrid />}
      </Container>
    </section>
  )
}
