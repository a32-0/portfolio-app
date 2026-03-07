import SectionShell from './SectionShell'

type Props = {
  id?: string
  label: string
  title?: string
  paragraphs: string[]
}

export default function ContextSection({ id, label, title, paragraphs }: Props) {
  return (
    <SectionShell id={id} label={label} title={title}>
      <div className="space-y-6 text-xl tracking-tight text-black md:text-2xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SectionShell>
  )
}
