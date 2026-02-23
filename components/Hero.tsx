import { hero } from '@/data/hero'

export default function Hero() {
  return (
    <section className="inline-flex min-h-[calc(100svh-4rem)] w-full flex-col items-center justify-center tracking-tight">
      {hero.map((text) => (
        <div
          key={text.titleMain}
          className="inline-flex w-full flex-col items-center justify-center gap-6"
        >
          <h1 className="self-stretch text-center text-6xl leading-16 font-medium">
            <span className="text-primary">{text.titleAccent}</span>
            <span className="text-black">{text.titleMain}</span>
          </h1>
          <p className="w-full max-w-200 text-center text-2xl font-normal text-black">
            {text.subtitle}
          </p>
          <div className="h-100 w-75 bg-secondary" />
        </div>
      ))}
    </section>
  )
}
