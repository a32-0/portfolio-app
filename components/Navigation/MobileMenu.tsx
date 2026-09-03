import Container from '@/components/Container'
import type { NavLink } from '@/data/navigation'
import NavLinks from './NavLinks'

type MobileMenuProps = {
  isOpen: boolean
  bgClass: string
  links: NavLink[]
  contactLink?: NavLink
  onNavigate: (href: string) => void
  onClose: () => void
}

export default function MobileMenu({
  isOpen,
  bgClass,
  links,
  contactLink,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div
      className={`md:hidden fixed inset-0 -z-10 overflow-y-auto ${bgClass} transition-opacity duration-200 starting:opacity-0`}
    >
      <Container className="flex flex-col items-start gap-6 pt-20 pb-12">
        <NavLinks links={links} variant="mobile" onNavigate={onNavigate} />
        {contactLink && (
          <a
            href={contactLink.href}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="py-2 text-3xl link-hover-underline hover:opacity-70"
          >
            {contactLink.label} ↗
          </a>
        )}
      </Container>
    </div>
  )
}
