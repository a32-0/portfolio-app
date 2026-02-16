'use client'

import type { MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      event.preventDefault()
      handleScrollTop()
    }
  }

  return (
    <nav className="mb-30 pt-8 font-sans text-base font-normal tracking-tight">
      <div className="inline-flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 text-black md:flex-nowrap">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="Back to home"
            className="rounded-full p-1 transition hover:opacity-50"
            onClick={handleLogoClick}
          >
            <Image src="/icons/catarsis.svg" width={32} height={32} alt="Catarsis" priority />
          </Link>
          <span>Armando Rojano</span>
        </div>

        <Link href="/#work" className="transition-colors">
          Work
        </Link>

        <Link href="/#about" className="transition-colors">
          About
        </Link>

        <Link href="/docs/UX-Designer_Armando-Rojano.pdf" target="_blank" className="text-tertiary">
          Resume ↗
        </Link>

        <Link href="mailto:armandorour@outlook.com" className="text-primary">
          Contact ↗
        </Link>
      </div>
    </nav>
  )
}
