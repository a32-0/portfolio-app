import { about } from '@/data/about'

export default function About() {
  return (
    <section id="about">
      <div className="mt-30 grid gap-12 text-white lg:grid-cols-[1fr,1.2fr]">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-light uppercase text-quaternary">About</p>
          <h2 className="text-4xl font-medium md:text-5xl">{about.title}</h2>
          <p className="max-w-200 text-lg font-light text-[#e6e6e6]">{about.intro}</p>
        </div>

        <div className="flex flex-col gap-10 rounded-2xl border border-white/5 bg-secondary/40 p-8">
          {about.principles.map((principle) => (
            <div
              key={principle.id}
              className="flex flex-col gap-3 border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-semibold text-quaternary">{principle.id}</span>
                <h3 className="text-2xl font-medium leading-tight">{principle.title}</h3>
              </div>
              <p className="text-base font-light leading-relaxed text-[#d9d9d9] md:text-lg">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
