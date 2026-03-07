import type { ReactNode } from 'react'
import SectionNav from './SectionNav'

type NavItem = {
  id: string
  label: string
}

type Props = {
  title: string
  eyebrow?: string
  navItems: NavItem[]
  children: ReactNode
}

export default function PageLayout({ title, eyebrow = 'Case study', navItems, children }: Props) {
  return (
    <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] xl:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-black/55">
              {eyebrow}
            </p>
            <h1 className="text-2xl font-medium tracking-tight text-black">{title}</h1>
          </div>
          <SectionNav items={navItems} />
        </div>
      </aside>

      <div className="min-w-0 space-y-16">{children}</div>
    </div>
  )
}
