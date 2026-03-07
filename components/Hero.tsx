import Link from 'next/link'
import { hero } from '@/data/hero'

export default function Hero() {
  return (
    <section className="inline-flex min-h-[calc(100svh-4rem)] w-full flex-col items-center justify-center">
      <div className="inline-flex w-full tracking-tighter flex-col items-center justify-center gap-6">
        <h1 className="text-center text-6xl font-medium text-black">{hero.title}</h1>
        <p className="w-full max-w-200 text-center text-2xl font-normal text-tertiary">
          {hero.subtitle}
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-3">
          {hero.ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noreferrer' : undefined}
              className="inline-flex items-center justify-center rounded-3xl outline -outline-offset-1 outline-black px-8 py-3 text-xl font-medium text-black transition hover:bg-primary hover:text-white"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
