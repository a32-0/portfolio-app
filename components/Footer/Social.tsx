'use client'

import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSocial() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="flex w-full flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-black
     pt-4 text-base font-normal tracking-tight"
    >
      <p>
        {footerContent.yearPrefix} <span className="tabular-nums">{year}</span>
      </p>

      <nav
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        aria-label="Social media"
      >
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
        className="link-hover-underline cursor-pointer text-base font-normal transition hover:opacity-50"
      >
        {footerContent.scrollTopLabel}
      </button>
    </div>
  )
}
