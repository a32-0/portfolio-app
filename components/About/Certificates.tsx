import Image from 'next/image'
import Link from 'next/link'

import { certificatesSection } from '@/data/certificates'

export default function Certificates() {
  const [featured, ...rest] = certificatesSection.items

  return (
    <section>
      <div className="grid gap-6 text-white lg:grid-cols-[1fr,1.1fr]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-light uppercase text-quaternary">Certificates</p>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            {certificatesSection.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CertificateCard certificate={featured} featured />
          {rest.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  )
}

type CardProps = {
  certificate: (typeof certificatesSection)['items'][number]
  featured?: boolean
}

function CertificateCard({ certificate, featured = false }: CardProps) {
  return (
    <Link
      href={certificate.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col gap-3 rounded-2xl border border-white/10 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-quaternary hover:text-quaternary ${
        featured ? 'md:col-span-2 ' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
          <Image
            src={certificate.logo}
            alt={`${certificate.issuer} logo`}
            width={36}
            height={36}
            className="size-8"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-[#cfcfcf]">{certificate.issuer}</span>
          <span className="text-base font-medium text-[#9b9b9b]">{certificate.date}</span>
        </div>
      </div>
      <p className="text-2xl font-semibold group-hover:underline">{certificate.title}</p>
      <p className="text-sm font-medium uppercase text-[#c3c3c3]">View credential ↗</p>
    </Link>
  )
}
