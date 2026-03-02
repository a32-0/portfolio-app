import { designPrinciples } from '@/data/designPrinciples'

export default function DesignPrinciples() {
  return (
    <section
      id="design-principles"
      className="inline-flex w-full flex-col items-center justify-center gap-8 tracking-tight"
    >
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="text-center text-3xl font-medium text-black">{designPrinciples.title}</h2>
        <p className="w-full max-w-200 text-center text-2xl font-normal text-tertiary">
          {designPrinciples.intro}
        </p>
      </div>

      {designPrinciples.principles.map((principle) => (
        <article
          key={principle.id}
          className="inline-flex w-full flex-col items-start justify-start gap-4 md:flex-row"
        >
          <div className="flex flex-1 items-start justify-start gap-2">
            <p className="text-xl font-normal text-tertiary">{principle.id}</p>
            <h3 className="flex-1 text-3xl leading-[1.05] font-medium text-black">
              {principle.title}
            </h3>
          </div>
          <div className="flex flex-1 items-start justify-start">
            <p className="text-xl font-normal text-tertiary">{principle.description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
