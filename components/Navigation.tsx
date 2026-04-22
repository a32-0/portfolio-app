'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 1 },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isCaseStudy = pathname.startsWith('/work/')

  const bgClass = isFooterVisible
    ? 'bg-primary'
    : isCaseStudy || isScrolled
      ? 'bg-white'
      : 'bg-transparent'

  const textClass = isFooterVisible || (!isCaseStudy && !isScrolled) ? 'text-white' : 'text-black'

  return (
    <nav className={`relative py-2 font-sans text-xl font-normal transition-colors duration-300 ${textClass}`}>
      <div
        aria-hidden
        className={`absolute top-0 left-1/2 h-full w-screen -translate-x-1/2 -z-10 transition-all duration-300 ${bgClass}`}
      />
      <div className="inline-flex w-full items-center justify-between">
        <Link
          href="/"
          aria-label="Back to home"
          className="transition hover:opacity-50"
          onClick={handleLogoClick}
        >
          <Image src="/icons/catarsis.svg" width={40} height={40} alt="Catarsis" priority />
        </Link>

        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="link-hover-underline transition hover:opacity-70"
          >
            {link.label}
            {link.external ? ' ↗' : ''}
          </Link>
        ))}
      </div>
    </nav>
  )
}
