import Container from '@/components/Container'
import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="h-screen overflow-hidden bg-primary text-white">
      <Container className="flex h-full flex-col items-start justify-end gap-20">
        <a
          href={`mailto:${footerContent.contactEmail}`}
          className="max-w-200 transition hover:opacity-80"
        >
          <span className="text-6xl font-medium font-sans text-white">
            {footerContent.cta.sans}
          </span>
          <span className="text-6xl font-medium font-serif italic underline text-white">
            {footerContent.cta.serif}
          </span>
        </a>

        <div className="self-stretch inline-flex items-center justify-between py-4 font-sans text-xl font-normal text-white">
          <p>
            {footerContent.yearPrefix} {currentYear}
          </p>
          <nav className="flex items-center gap-8" aria-label="Footer links">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:')
              const isDownload = link.href.endsWith('.pdf')
              const suffix = isDownload ? ' ↓' : isExternal ? ' ↗' : ''
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal || isDownload ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="link-hover-underline transition hover:opacity-70"
                >
                  {link.label}
                  {suffix}
                </a>
              )
            })}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
