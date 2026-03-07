import SectionShell from './SectionShell'

type Props = {
  id?: string
  label: string
  title: string
  problem: string
  solution: string
}

export default function ChallengeSection({ id, label, title, problem, solution }: Props) {
  return (
    <SectionShell id={id} label={label} title={title}>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#ff8f7a] p-4 text-[#4e140c]">
          <h3 className="text-xl font-medium tracking-tight">Problema</h3>
          <p className="text-base tracking-tight">{problem}</p>
        </article>
        <article className="flex min-h-56 flex-col justify-between rounded-2xl bg-[#4fd06b] p-4 text-[#0e4c1c]">
          <h3 className="text-xl font-medium tracking-tight">Solucion</h3>
          <p className="text-base tracking-tight">{solution}</p>
        </article>
      </div>
    </SectionShell>
  )
}
