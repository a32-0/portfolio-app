export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#design-principles' },
  { label: 'Archive', href: '/archive' },
  { label: 'Contact', href: 'mailto:armandorour@outlook.com', external: true },
]
