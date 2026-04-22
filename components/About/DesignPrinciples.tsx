import { designPrinciples } from '@/data/designPrinciples'

export default function DesignPrinciples() {
  return (
    <section
      id="design-principles"
      className="inline-flex w-full items-center justify-center gap-12"
    >
      <h2 className="w-64 shrink-0 text-5xl font-medium font-sans text-black">
        {designPrinciples.heading}
      </h2>

      <div className="flex flex-1 flex-col">
        {designPrinciples.principles.map((principle) => (
          <article key={principle.id} className="flex flex-col gap-4 py-10 font-sans">
            <div className="inline-flex items-start gap-2">
              <span className="text-base font-normal text-primary">
                {principle.id}
              </span>
              <h3 className="flex-1 text-4xl font-medium font-serif text-black">
                {principle.title}
              </h3>
            </div>
            <p className="text-xl font-normal text-tertiary">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
