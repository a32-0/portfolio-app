import Image from 'next/image'
import Link from 'next/link'
import { certificates } from '@/data/certificates'
export default function Certificates() {
  return (
    <section>
      <div className="flex flex-col gap-6 text-white">
        <p className="text-2xl uppercase font-light text-center text-quaternary">Certificates</p>
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          {certificates.map(({ id, href, issuer, title, date, logo }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex lg:w-80 flex-col gap-2 hover:text-quaternary"
            >
              <Image src={logo} alt={`${issuer} logo`} width={48} height={48} className="size-10" />
              <p className="text-2xl font-medium group-hover:underline">
                {title} <span className="font-light"> by {issuer}</span>
              </p>
              <p className="text-base font-light text-[#BDBDBD]">{date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
