'use client'

import Container from '@/components/Container'
import { socialLinks } from '@/data/social'

export default function FooterSocial() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="relative z-10 flex h-full w-full flex-col px-4 pb-[calc(15.375vw+16px)] pt-12 text-base font-light uppercase text-white sm:pt-16 lg:pt-20"
      data-footer-social
    >
      <Container className="mt-auto flex flex-col">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © <span className="tabular-nums">{year}</span>
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
            aria-label="Social media"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition hover:text-accent hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleScrollTop}
            className="text-base font-light uppercase transition hover:text-accent cursor-pointer hover:underline"
          >
            Scroll to top ↑
          </button>
        </div>
      </Container>
    </div>
  )
}
