import Link from 'next/link'

import { certificatesSection } from '@/data/certificates'

export default function Certificates() {
  return (
    <section className="inline-flex w-full flex-col items-center justify-start gap-3 pt-3">
      <h2 className="w-full text-center text-2xl font-medium text-primary tracking-tight">
        {certificatesSection.title}
      </h2>

      <div className="inline-flex w-full flex-wrap items-center justify-center border-t border-secondary">
        {certificatesSection.items.map((certificate, index) => {
          const hasLink = !!certificate.href
          const hasLeftBorder = index > 0

          const cellClass = `inline-flex h-24 w-48 flex-col items-start justify-start gap-2 p-4 tracking-tight ${
            hasLeftBorder ? 'border-l border-secondary' : ''
          } ${certificate.ongoing ? 'border-t border-secondary bg-quaternary' : ''}`

          const content = hasLink ? `${certificate.title} ↗` : certificate.title

          if (hasLink && certificate.href) {
            return (
              <Link
                key={certificate.id}
                href={certificate.href}
                target="_blank"
                rel="noreferrer"
                className={cellClass}
              >
                <p className="link-hover-underline self-stretch text-sm font-normal text-black">
                  {content}
                </p>
              </Link>
            )
          }

          return (
            <div key={certificate.id} className={cellClass}>
              <p className="self-stretch text-sm font-normal text-black">{content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
