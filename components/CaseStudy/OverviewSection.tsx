type Group = {
  title: string
  items: string[]
  display?: 'chips' | 'list' | 'dots'
}

type Props = {
  id?: string
  groups: Group[]
}

function OverviewCard({ group }: { group: Group }) {
  const display = group.display ?? 'list'

  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-black/15 bg-white p-4">
      <h2 className="text-sm font-semibold text-black">{group.title}</h2>

      {display === 'chips' ? (
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={`${group.title}-${item}`} className="rounded-lg bg-neutral-100 px-3 py-2 text-base text-black">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {display === 'list' ? (
        <div className="space-y-1.5 text-base text-black">
          {group.items.map((item) => (
            <p key={`${group.title}-${item}`}>{item}</p>
          ))}
        </div>
      ) : null}

      {display === 'dots' ? (
        <div className="space-y-2.5">
          {group.items.map((item) => (
            <div key={`${group.title}-${item}`} className="flex items-start gap-2">
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary/35" />
              <span className="mt-2 h-[5px] w-[5px] rounded-full bg-primary" />
              <p className="flex-1 text-base text-black">{item}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default function OverviewSection({ id, groups }: Props) {
  return (
    <section id={id} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
      {groups.map((group) => (
        <OverviewCard key={group.title} group={group} />
      ))}
    </section>
  )
}
