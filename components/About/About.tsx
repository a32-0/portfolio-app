import { about } from '@/data/about'

export default function About() {
  return (
    <section
      id="about"
      className="inline-flex w-full flex-col items-start justify-start gap-8 tracking-tight"
    >
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h2 className="text-2xl font-medium text-black">{about.title}</h2>
        <p className="w-full text-3xl font-medium text-primary">{about.intro}</p>
      </div>

      {about.principles.map((principle) => (
        <article
          key={principle.id}
          className="flex w-full flex-col items-start justify-start gap-2"
        >
          <p className="text-base font-normal text-primary">{principle.id}</p>
          <h3 className="text-2xl font-medium text-black">{principle.title}</h3>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <p className="w-full max-w-200 text-base font-normal text-tertiary">
              {principle.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
