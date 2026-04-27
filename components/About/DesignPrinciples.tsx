import { designPrinciples } from '@/data/designPrinciples'

export default function DesignPrinciples() {
  const total = designPrinciples.principles.length

  return (
    <section
      id="design-principles"
      className="inline-flex w-full flex-col items-start gap-8 scroll-mt-24"
    >
      <h2 className="text-5xl font-medium font-serif italic text-primary">
        {designPrinciples.heading}
      </h2>

      <div className="flex w-full flex-col">
        {designPrinciples.principles.map((principle, index) => {
          const isFirst = index === 0
          const isLast = index === total - 1

          const borderClass = isLast
            ? 'outline-1 -outline-offset-1 outline-tertiary rounded-bl-2xl rounded-br-2xl'
            : `border-l border-r border-t border-tertiary ${isFirst ? 'rounded-tl-2xl rounded-tr-2xl' : ''}`

          return (
            <article
              key={principle.id}
              className={`w-full p-6 flex flex-col items-start gap-2 ${borderClass}`}
            >
              <div className="flex w-full flex-col items-end gap-2">
                <span className="text-xl font-medium font-sans text-primary">{principle.id}</span>
                <h3 className="w-full text-3xl font-medium font-sans text-black">
                  {principle.title}
                </h3>
              </div>
              <p className="w-full text-xl font-normal font-sans text-tertiary">
                {principle.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
