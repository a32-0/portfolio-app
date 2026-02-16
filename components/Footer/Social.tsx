'use client'

import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSocial() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="inline-flex w-full flex-1 flex-col border-t border-secondary text-base font-normal tracking-tight text-white lg:flex-row">
      <div className="flex flex-1 items-start justify-start gap-2.5 border-b border-r border-secondary pl-3 pt-3 lg:self-stretch lg:border-b-0">
        <p>
          {footerContent.yearPrefix} <span className="tabular-nums">{year}</span>
        </p>
      </div>

      <nav
        className="flex flex-1 flex-wrap items-start justify-center gap-x-12 gap-y-4 border-b border-r border-secondary px-3 pt-3 lg:self-stretch lg:border-b-0"
        aria-label="Social media"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="transition hover:opacity-70"
          >
            {link.label} ↗
          </a>
        ))}
      </nav>

      <div className="flex flex-1 items-start justify-end gap-2.5 px-3 pt-3 lg:self-stretch">
        <button
          type="button"
          onClick={handleScrollTop}
          className="cursor-pointer text-base font-normal text-white transition hover:opacity-70"
        >
          {footerContent.scrollTopLabel}
        </button>
      </div>
    </div>
  )
}
