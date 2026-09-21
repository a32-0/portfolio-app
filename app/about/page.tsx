import type { Metadata } from 'next'

import Container from '@/components/Container'
import DesignPrinciples from '@/components/About/DesignPrinciples'
import About from '@/components/About/About'
import { OG_IMAGE, OG_IMAGES, SITE_NAME } from '@/data/metadata'

const title = 'About'
const socialTitle = 'About | Armando Rojano'
const description =
  'How Armando Rojano approaches product design: systems over screens, language as a design material, and constraints as inputs.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: '/about',
    siteName: SITE_NAME,
    title: socialTitle,
    description,
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description,
    images: [OG_IMAGE.url],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-svh pt-24 sm:pt-32">
      <Container className="flex flex-col gap-20 pb-12">
        <About />
        <DesignPrinciples />
      </Container>
    </main>
  )
}
