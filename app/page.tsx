import Container from '@/components/Container'
import Hero from '@/components/Hero'
import WhatIBuild from '@/components/About/WhatIBuild'
import SelectedWork from '@/components/Work/SelectedWork'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import CoreCapabilities from '@/components/About/CoreCapabilities'
import About from '@/components/About/About'

export default function Home() {
  return (
    <main className="flex flex-col gap-50">
      <Container className="flex flex-col gap-50">
        <Hero />
        <WhatIBuild />
        <SelectedWork />
        <DesignPrinciples />
      </Container>
      <CoreCapabilities />
      <Container className="flex flex-col gap-50">
        <About />
      </Container>
    </main>
  )
}
