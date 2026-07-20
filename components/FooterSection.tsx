import Container from '@/components/Container'
import { footerContent } from '@/data/footer'
import { socialLinks } from '@/data/social'

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="flex min-h-lvh flex-col bg-primary text-white pb-[env(safe-area-inset-bottom)]"
    >
      <Container className="flex flex-1 flex-col items-start justify-end gap-10 md:gap-20">
        <p className="max-w-200">
          <span className="text-display-2xl font-medium font-sans text-white">
            {footerContent.cta.sans}
          </span>
          <a
            href={`mailto:${footerContent.contactEmail}`}
            className="text-display-2xl font-medium font-serif leading-tight italic text-white underline decoration-transparent hover:decoration-white transition-colors"
          >
            {footerContent.cta.serif}
          </a>
        </p>

        <nav
          className="self-stretch inline-flex items-center justify-between py-2 font-sans text-base font-normal text-white"
          aria-label="Footer links"
        >
          <p>
            {footerContent.yearPrefix} {currentYear}
          </p>
          {socialLinks.map((link) => {
            const isExternal =
              link.href.startsWith('http') ||
              link.href.startsWith('mailto:') ||
              link.href.endsWith('.pdf')
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="link-hover-underline transition hover:opacity-70"
              >
                {link.label}
                {isExternal ? ' ↗' : ''}
              </a>
            )
          })}
        </nav>
      </Container>
    </footer>
  )
}
