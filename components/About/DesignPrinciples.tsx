import { designPrinciples } from '@/data/designPrinciples'

export default function DesignPrinciples() {
  return (
    <section
      id="design-principles"
      className="inline-flex w-full flex-col items-start justify-start gap-8 tracking-tight"
    >
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h2 className="text-2xl font-medium text-black">{designPrinciples.title}</h2>
        <p className="w-full text-3xl font-medium text-primary">{designPrinciples.intro}</p>
      </div>

      {designPrinciples.principles.map((principle) => (
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
