import { strengthsSection } from '@/data/strengths'

export default function Strengths() {
  const rows = [strengthsSection.items.slice(0, 2), strengthsSection.items.slice(2, 4)]

  return (
    <section className="inline-flex w-full flex-col items-center justify-center gap-4 tracking-tight">
      <h2 className="w-full text-center text-2xl font-medium text-primary">
        {strengthsSection.title}
      </h2>
      <p className="w-full max-w-200 text-center text-base font-normal text-neutral-600">
        {strengthsSection.intro}
      </p>

      {rows.map((row, rowIndex) => (
        <div
          key={`capability-row-${rowIndex + 1}`}
          className="inline-flex w-full flex-col items-center justify-end gap-4 lg:flex-row"
        >
          {row.map((item) => (
            <article key={item.id} className="flex w-full items-center justify-start lg:w-auto">
              <div className="inline-flex flex-col items-start justify-start gap-2 border-y border-l border-zinc-300 bg-neutral-100 p-4">
                <p className="text-sm font-normal text-black">{item.label}</p>
              </div>
              <div className="inline-flex flex-1 flex-col items-start justify-start gap-2 border-y border-r border-zinc-300 p-4">
                <p className="text-sm font-normal text-black">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      ))}
    </section>
  )
}
