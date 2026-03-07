import SectionShell from './SectionShell'

type ResultItem = {
  value: string
  description: string
}

type Props = {
  id?: string
  label: string
  title: string
  items: ResultItem[]
}

export default function ResultsSection({ id, label, title, items }: Props) {
  return (
    <SectionShell id={id} label={label} title={title}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.value} className="flex min-h-56 flex-col justify-between rounded-lg bg-neutral-100 p-4">
            <h3 className="text-4xl font-semibold tracking-tight text-black">{item.value}</h3>
            <p className="text-base tracking-tight text-black">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
