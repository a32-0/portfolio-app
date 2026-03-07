import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSocial() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="inline-flex w-full max-w-300 items-center justify-between px-6 py-3 text-xl font-normal tracking-tight text-white">
      <p>
        {footerContent.yearPrefix} <span className="tabular-nums">{currentYear}</span>
      </p>

      <nav className="flex items-center justify-center gap-8" aria-label="Social media">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={
              link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined
            }
            rel={
              link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noreferrer' : undefined
            }
            className="link-hover-underline transition hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
