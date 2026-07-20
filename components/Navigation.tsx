'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import Button from '@/components/ui/Button'
import Container from '@/components/Container'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  // Render-time state adjustment (not an effect): closes the menu when the
  // route changes underneath it, e.g. browser back/forward while open.
  const [menuPathname, setMenuPathname] = useState(pathname)
  if (menuPathname !== pathname) {
    setMenuPathname(pathname)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMenuOpen])

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false)
    if (pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isCaseStudy = pathname.startsWith('/work/')
  const isArchive = pathname === '/archive'
  const solid = isScrolled || isMenuOpen

  const bgClass = isFooterVisible
    ? 'bg-primary'
    : isCaseStudy
      ? 'bg-white'
      : isArchive
        ? 'bg-black'
        : solid
          ? 'bg-white'
          : 'bg-transparent'

  const isLight = (isCaseStudy || (solid && !isArchive)) && !isFooterVisible
  const textClass = isLight ? 'text-black' : 'text-white'

  const regularLinks = navLinks.filter((link) => !link.external)
  const contactLink = navLinks.find((link) => link.external)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={`w-full rounded-b-xl font-sans text-base font-normal transition-colors duration-300 ${bgClass} ${textClass}`}
    >
      <Container className="flex items-center justify-between py-2">
        <Link
          href="/"
          aria-label="Back to home"
          className="transition hover:opacity-50"
          onClick={handleLogoClick}
        >
          <Image src="/icons/catarsis.svg" width={32} height={32} alt="Catarsis" priority />
        </Link>

        {regularLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hidden md:inline link-hover-underline hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}

        {contactLink && (
          <Button
            href={contactLink.href}
            outlineColor={isLight ? 'black' : 'white'}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline"
          >
            {contactLink.label} ↗
          </Button>
        )}

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          className="md:hidden -mr-3 p-3"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 -z-10 overflow-y-auto ${bgClass} transition-opacity duration-200 starting:opacity-0`}
        >
          <Container className="flex flex-col items-start gap-6 pt-20 pb-12">
            {regularLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-2 text-3xl link-hover-underline hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            {contactLink && (
              <a
                href={contactLink.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="py-2 text-3xl link-hover-underline hover:opacity-70"
              >
                {contactLink.label} ↗
              </a>
            )}
          </Container>
        </div>
      )}
    </nav>
  )
}
