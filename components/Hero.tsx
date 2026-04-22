import { hero } from '@/data/hero'
import HeroWave from '@/components/ui/dynamic-wave-canvas-background'

export default function Hero() {
  return (
    <section className="relative inline-flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <HeroWave />
      <div className="relative z-10 inline-flex w-full flex-col items-center justify-center gap-6">
        <h1 className="w-full max-w-300 text-center text-7xl font-medium text-white">
          <span className="font-serif italic">{hero.title.serif}</span>
          <span className="font-sans">{hero.title.sans}</span>
        </h1>
        <p className="w-full max-w-200 text-center text-3xl font-normal font-serif text-secondary">
          {hero.subtitle}
        </p>
      </div>
    </section>
  )
}
