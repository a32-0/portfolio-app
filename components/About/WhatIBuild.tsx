import { whatIBuildSection } from '@/data/whatIBuild'

export default function WhatIBuild() {
  return (
    <section className="inline-flex w-full flex-col items-start justify-start gap-6 tracking-tight lg:flex-row">
      <div className="inline-flex flex-1 flex-col items-center justify-center gap-2">
        <h2 className="self-stretch text-3xl font-medium text-black">{whatIBuildSection.title}</h2>
        <p className="self-stretch text-2xl font-normal text-tertiary">{whatIBuildSection.intro}</p>
      </div>
      <div className="inline-flex flex-1 flex-col items-center justify-start gap-12">
        {whatIBuildSection.items.map((item) => (
          <article key={item.id} className="flex w-full flex-col items-start justify-start gap-2">
            <h3 className="self-stretch text-2xl font-medium text-black">{item.title}</h3>
            <p className="self-stretch text-xl font-normal text-tertiary">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
