import SectionShell from './SectionShell'

type Objective = {
  title: string
  description: string
}

type Props = {
  id?: string
  label: string
  title: string
  items: Objective[]
}

export default function ObjectivesSection({ id, label, title, items }: Props) {
  return (
    <SectionShell id={id} label={label} title={title}>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="flex min-h-64 flex-col justify-between rounded-2xl border border-black/15 bg-white p-4">
            <h3 className="text-xl font-medium tracking-tight text-black">{item.title}</h3>
            <p className="text-lg tracking-tight text-black">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
