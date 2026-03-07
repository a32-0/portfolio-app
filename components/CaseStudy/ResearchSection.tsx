import SectionShell from './SectionShell'

type ResearchItem = {
  step: string
  title: string
  description: string
}

type Props = {
  id?: string
  label: string
  title: string
  items: ResearchItem[]
}

export default function ResearchSection({ id, label, title, items }: Props) {
  return (
    <SectionShell id={id} label={label} title={title}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={`${item.step}-${item.title}`} className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-5xl font-extralight text-black">{item.step}</p>
            <h3 className="mt-2 text-base font-medium text-black">{item.title}</h3>
            <p className="mt-4 text-base tracking-tight text-black">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
