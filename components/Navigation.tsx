'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import Button from '@/components/ui/Button'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      setIsFooterVisible(atBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isCaseStudy = pathname.startsWith('/work/')
  const isArchive = pathname === '/archive'

  const bgClass = isFooterVisible
    ? 'bg-primary'
    : isCaseStudy
      ? 'bg-white'
      : isArchive
        ? 'bg-black'
        : isScrolled
          ? 'bg-white'
          : 'bg-transparent'

  const isLight = (isCaseStudy || (isScrolled && !isArchive)) && !isFooterVisible
  const textClass = isLight ? 'text-black' : 'text-white'

  const regularLinks = navLinks.filter((link) => !link.external)
  const contactLink = navLinks.find((link) => link.external)

  return (
    <nav
      className={`w-full rounded-b-xl font-sans text-base font-normal transition-colors duration-300 ${bgClass} ${textClass}`}
    >
      <div className="mx-auto w-full max-w-300 py-2 flex justify-between items-center">
        <Link
          href="/"
          aria-label="Back to home"
          className="transition hover:opacity-50"
          onClick={handleLogoClick}
        >
          <Image src="/icons/catarsis.svg" width={24} height={24} alt="Catarsis" priority />
        </Link>

        {regularLinks.map((link) => (
          <Link key={link.label} href={link.href} className="link-hover-underline hover:opacity-70">
            {link.label}
          </Link>
        ))}

        {contactLink && (
          <Button
            href={contactLink.href}
            outlineColor={isLight ? 'black' : 'white'}
            target="_blank"
            rel="noreferrer"
          >
            {contactLink.label} ↗
          </Button>
        )}
      </div>
    </nav>
  )
}
