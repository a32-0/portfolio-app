'use client'

import Image from 'next/image'
import { ButtonLink } from '@/components/Button'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Navigation() {
  return (
    <nav className="pt-8 mb-30 flex items-center justify-between font-sans text-base font-normal uppercase">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="rounded-full p-1 cursor-pointer transition hover:opacity-50"
      >
        <Image src="/icons/catarsis.svg" width={40} height={40} alt="Catarsis" />
      </button>
      <div className="flex items-center gap-2">
        <ButtonLink href="/#work" variant="secondary">
          Work
        </ButtonLink>
        <ButtonLink href="/#about" variant="secondary">
          About
        </ButtonLink>
      </div>
      <ButtonLink
        href="mailto:armandorour@outlook.com"
        variant="primary"
        className="hidden sm:inline-flex"
      >
        Contact ↗
      </ButtonLink>
    </nav>
  )
}
