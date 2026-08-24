import type { Metadata } from 'next'

import Container from '@/components/Container'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import About from '@/components/About/About'

export const metadata: Metadata = {
  title: 'About',
  description:
    'How Armando Rojano approaches product design: systems over screens, language as a design material, and constraints as inputs.',
}

export default function AboutPage() {
  return (
    <main className="min-h-svh pt-24 sm:pt-32">
      <Container className="flex flex-col gap-20 pb-12">
        <DesignPrinciples />
        <About />
      </Container>
    </main>
  )
}
