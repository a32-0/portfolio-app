import SectionLabel from './SectionLabel'

type Props = {
  id?: string
  label: string
  title?: string
  children: React.ReactNode
  surface?: 'default' | 'tint'
}

export default function SectionShell({ id, label, title, children, surface = 'default' }: Props) {
  const surfaceClass = surface === 'tint' ? 'rounded-[2rem] bg-[#f8dfe9] px-6 py-8 md:px-10 md:py-12' : ''

  return (
    <section id={id} className={`flex flex-col gap-6 ${surfaceClass}`}>
      <SectionLabel label={label} />
      {title ? <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">{title}</h2> : null}
      {children}
    </section>
  )
}
