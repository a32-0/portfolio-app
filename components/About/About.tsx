import { about } from '@/data/about'

export default function About() {
  return (
    <section id="about">
      <div className="mt-30 grid gap-6 text-white lg:grid-cols-[1fr,1.2fr]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-light uppercase text-quaternary">About</p>
          <h2 className="text-4xl font-medium md:text-5xl">{about.title}</h2>
        </div>

        <div className="flex flex-col gap-10 rounded-2xl border border-white/10 p-8">
          {about.principles.map((principle) => (
            <div
              key={principle.id}
              className="flex flex-col gap-3 border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-semibold text-quaternary">{principle.id}</span>
                <h3 className="text-2xl font-medium">{principle.title}</h3>
              </div>
              <p className="text-base font-light text-[#d9d9d9] md:text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
