import { designPrinciples } from '@/data/designPrinciples'

export default function DesignPrinciples() {
  return (
    <section
      id="design-principles"
      className="inline-flex w-full flex-col items-start justify-center gap-5 scroll-mt-24"
    >
      <h2 className="text-5xl font-medium font-serif italic text-black">
        {designPrinciples.heading}
      </h2>

      <div className="flex w-full flex-col items-start">
        {designPrinciples.principles.map((principle) => (
          <article key={principle.id} className="flex w-full flex-col items-start gap-2 py-10">
            <div className="inline-flex w-full items-start gap-2">
              <span className="text-base font-normal text-primary">{principle.id}</span>
              <h3 className="flex-1 text-3xl font-medium font-sans text-black">
                {principle.title}
              </h3>
            </div>
            <p className="w-full text-xl font-normal font-sans text-tertiary">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
