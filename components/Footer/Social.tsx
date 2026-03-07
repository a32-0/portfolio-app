'use client'

import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSocial() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="inline-flex h-auto w-full flex-col items-start justify-between gap-8 px-6 py-6 text-base font-normal text-white md:h-16 md:flex-row md:items-center md:px-28 md:py-0">
      <p>
        {footerContent.yearPrefix} <span className="tabular-nums">{year}</span>
      </p>

      <nav className="flex flex-wrap items-center gap-6 md:gap-12" aria-label="Social media">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="link-hover-underline transition hover:opacity-70"
          >
            {link.label} ↗
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleScrollTop}
        className="link-hover-underline cursor-pointer text-secondary transition hover:text-white"
      >
        {footerContent.scrollTopLabel}
      </button>
    </div>
  )
}
