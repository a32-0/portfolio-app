import { hero } from '@/data/hero'

export default function Hero() {
  const highlight = '—bridging'

  return (
    <section>
      {hero.map((text) => (
        <div key={text.title}>
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl text-right">
              {text.title.includes(highlight) ? (
                <>
                  {text.title.split(highlight)[0]}
                  <strong className="font-semibold">{highlight}</strong>
                  {text.title.split(highlight)[1]}
                </>
              ) : (
                text.title
              )}
            </h1>
            <p className="text-base text-right text-secondary">{text.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
