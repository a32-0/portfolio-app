import SectionShell from './SectionShell'

type Finding = {
  findingLabel: string
  findingTitle: string
  findingBody: string
  recommendationLabel: string
  recommendationTitle: string
  recommendationBody: string
  impact: string
}

type Props = {
  id?: string
  label: string
  title: string
  items: Finding[]
}

export default function FindingsSection({ id, label, title, items }: Props) {
  return (
    <SectionShell id={id} label={label} title={title} surface="tint">
      <div className="space-y-12">
        {items.map((item, index) => (
          <article key={item.findingTitle} className="space-y-6">
            <div className="space-y-2">
              <p className="text-base uppercase text-black/70">{item.findingLabel}</p>
              <h3 className="text-3xl font-semibold tracking-tight text-black">{item.findingTitle}</h3>
              <p className="text-xl tracking-tight text-black md:text-2xl">{item.findingBody}</p>
            </div>

            <div className="space-y-2">
              <p className="text-base uppercase text-black/70">{item.recommendationLabel}</p>
              <h4 className="text-2xl font-medium tracking-tight text-black">{item.recommendationTitle}</h4>
              <p className="text-xl tracking-tight text-black md:text-2xl">{item.recommendationBody}</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-lg tracking-tight text-black/70">
                Espacio para comparar antes y despues con capturas, prototipos o embeds del hallazgo.
              </p>
            </div>

            <div className="rounded-2xl bg-[#4fd06b]/85 p-4 text-lg tracking-tight text-[#0e4c1c] md:text-xl">
              {item.impact}
            </div>

            {index < items.length - 1 ? <div className="h-px w-full bg-black/15" /> : null}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
