import Link from 'next/link'
import { hero } from '@/data/hero'
import HeroWave from '@/components/ui/dynamic-wave-canvas-background'

export default function Hero() {
  return (
    <section className="relative inline-flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <HeroWave />
      <div className="relative z-10 inline-flex w-full tracking-tighter flex-col items-center justify-center gap-6">
        <h1 className="w-full max-w-300 text-center text-6xl font-medium tracking-tight text-white">
          <span className="font-serif italic">{hero.title.serif}</span>
          <span className="font-sans">{hero.title.sans}</span>
        </h1>
        <p className="w-full max-w-200 text-center text-2xl font-normal font-serif text-secondary">
          {hero.subtitle}
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-3">
          {hero.ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noreferrer' : undefined}
              className="inline-flex items-center justify-center rounded-3xl outline -outline-offset-1 outline-white/40 px-8 py-3 text-xl font-medium text-white transition hover:bg-white/10 hover:outline-white"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
