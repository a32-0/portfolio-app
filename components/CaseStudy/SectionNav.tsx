'use client'

import { useEffect, useMemo, useState } from 'react'

type NavItem = {
  id: string
  label: string
}

type Props = {
  items: NavItem[]
}

export default function SectionNav({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  const itemIds = useMemo(() => items.map((item) => item.id), [items])

  useEffect(() => {
    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => !!element)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.2, 0.6, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [itemIds])

  return (
    <nav aria-label="Case study sections" className="rounded-2xl border border-black/10 bg-white p-4">
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block rounded-xl px-3 py-2 text-sm tracking-tight transition-colors ${
                  isActive ? 'bg-primary text-white' : 'text-black/75 hover:bg-black/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
