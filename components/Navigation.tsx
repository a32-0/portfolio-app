'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <nav className="py-4 font-sans text-base font-normal tracking-tight">
      <div
        className={`inline-flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-6 text-black transition-all duration-200 md:flex-nowrap ${
          isScrolled ? 'rounded-lg bg-white/0 p-2 backdrop-blur-[0px]' : ''
        }`}
      >
        <div>
          <Link
            href="/"
            aria-label="Back to home"
            className="rounded-full transition hover:opacity-50 flex items-center gap-2"
            onClick={handleLogoClick}
          >
            <Image src="/icons/catarsis.svg" width={32} height={32} alt="Catarsis" priority />
            <span>Armando Rojano</span>
          </Link>
        </div>

        <Link href="/#work" className="link-hover-underline transition-colors">
          Work
        </Link>

        <Link href="/#design-principles" className="link-hover-underline transition-colors">
          About
        </Link>

        <Link
          href="/docs/UX-Designer_Armando-Rojano.pdf"
          target="_blank"
          className="link-hover-underline"
        >
          Resume ↗
        </Link>

        <Link href="mailto:armandorour@outlook.com" className="link-hover-underline">
          Contact ↗
        </Link>
      </div>
    </nav>
  )
}
