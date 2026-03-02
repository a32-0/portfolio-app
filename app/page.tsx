import Container from '@/components/Container'
import Hero from '@/components/Hero'
import WhatIBuild from '@/components/About/WhatIBuild'
import SelectedWork from '@/components/Work/SelectedWork'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import Certificates from '@/components/About/Certificates'
import About from '@/components/About/About'

export default function Home() {
  return (
    <main className="flex flex-col gap-30">
      <Container className="flex flex-col gap-30">
        <Hero />
        <WhatIBuild />
        <SelectedWork />
        <DesignPrinciples />
      </Container>
      <Certificates />
      <Container className="flex flex-col gap-30">
        <About />
      </Container>
    </main>
  )
}
