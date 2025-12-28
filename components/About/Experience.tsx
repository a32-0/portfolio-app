import { ButtonLink } from '@/components/Button'
import { experienceSection } from '@/data/experience'

export default function Experience() {
  return (
    <section>
      <div className="grid gap-6 text-white lg:grid-cols-[1fr,1.25fr]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-light uppercase text-quaternary">Experience</p>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            {experienceSection.title}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/5 p-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-quaternary/60" />
          <div className="flex flex-col gap-8">
            {experienceSection.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  {item.current ? (
                    <div className="relative hidden items-center justify-center lg:flex">
                      <div className="live-animation h-3 w-3 rounded-full bg-quaternary"></div>
                      <div className="pulse-animation absolute h-3 w-3 rounded-full bg-quaternary opacity-80"></div>
                    </div>
                  ) : (
                    <div className="hidden h-3 w-3 shrink-0 rounded-full bg-white/40 lg:inline"></div>
                  )}
                  <h3 className="text-3xl font-semibold">
                    {item.role}
                    <span className="font-light text-[#c3c3c3]"> @ {item.company}</span>
                  </h3>
                </div>
                <p className="text-base font-light text-[#c3c3c3] lg:pl-7">{item.description}</p>
                <p className="text-base font-base text-[#c3c3c3] lg:pl-7">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
        <ButtonLink
          href={experienceSection.resumeCta.href}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="w-fit text-white border-white"
        >
          {experienceSection.resumeCta.label}
        </ButtonLink>
      </div>
    </section>
  )
}
