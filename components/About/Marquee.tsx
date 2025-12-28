'use client'

import type { CSSProperties } from 'react'

const marqueeItems = [
  'UX design',
  'UX Research',
  'Visual Design',
  'Content Design',
  'UI Design',
  'Product Design',
  'Conversation Design',
]

export default function Marquee() {
  const sequence = [...marqueeItems, ...marqueeItems, ...marqueeItems]
  const marqueeStyle: CSSProperties & { '--marquee-speed'?: string } = { '--marquee-speed': '18s' }

  return (
    <section aria-label="Capabilities marquee">
      <div className="overflow-hidden bg-white text-black">
        <div
          className="flex w-max items-center gap-6 whitespace-nowrap py-10 text-4xl font-normal uppercase"
          data-marquee-track
          style={marqueeStyle}
        >
          {sequence.map((label, index) => (
            <span key={`${label}-${index}`} className="flex items-center gap-6">
              <span className="text-2xl leading-none">{'\u2022'}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
