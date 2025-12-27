'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'

export default function Navigation() {
  return (
    <nav className="pt-8 mb-30 flex items-center justify-between font-sans text-base font-normal uppercase">
      <Link
        href="/"
        aria-label="Back to home"
        className="rounded-full p-1 transition hover:opacity-50"
      >
        <Image src="/icons/catarsis.svg" width={40} height={40} alt="Catarsis" priority />
      </Link>
      <div className="flex items-center gap-2">
        <ButtonLink href="/#work" variant="secondary" aria-label="Work">
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
