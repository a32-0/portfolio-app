import { technologySection } from '@/data/technologies'

export default function Technologies() {
  const rows = [technologySection.items.slice(0, 2), technologySection.items.slice(2, 4)]

  return (
    <section className="inline-flex w-full flex-col items-center justify-center gap-4 tracking-tight">
      <h2 className="w-full text-center text-2xl font-medium text-primary">
        {technologySection.title}
      </h2>

      {rows.map((row, rowIndex) => (
        <div
          key={`capability-row-${rowIndex + 1}`}
          className="inline-flex w-full flex-col items-center justify-end gap-4 lg:flex-row"
        >
          {row.map((item) => (
            <article key={item.id} className="flex w-full items-center justify-start lg:w-auto">
              <div className="inline-flex flex-col items-start justify-start gap-2 border-y border-l border-secondary bg-quaternary p-4">
                <p className="text-sm font-normal text-black">{item.label}</p>
              </div>
              <div className="inline-flex flex-1 flex-col items-start justify-start gap-2 border-y border-r border-secondary p-4">
                <p className="text-sm font-normal text-black">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      ))}
    </section>
  )
}
