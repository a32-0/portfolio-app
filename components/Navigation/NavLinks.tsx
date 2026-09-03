import Link from 'next/link'
import type { NavLink } from '@/data/navigation'

type NavLinksProps = {
  links: NavLink[]
  variant: 'desktop' | 'mobile'
  onNavigate: (href: string) => void
}

const VARIANT_CLASS: Record<NavLinksProps['variant'], string> = {
  desktop: 'hidden md:inline link-hover-underline hover:opacity-70',
  mobile: 'py-2 text-3xl link-hover-underline hover:opacity-70',
}

export default function NavLinks({ links, variant, onNavigate }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => onNavigate(link.href)}
          className={VARIANT_CLASS[variant]}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
