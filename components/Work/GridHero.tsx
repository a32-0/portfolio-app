import CardHero from './CardHero'
import { projects } from '@/data/projects'

type Props = {
  limit?: number
}

export default function GridHero({ limit = 2 }: Props) {
  const projectList = projects.slice(0, limit)

  return (
    <section id="work" className="mx-8">
      <h1 className="uppercase text-primary font-light mb-2 text-2xl">Work</h1>
      <div className="grid gap-20 grid-cols-2 2xl:gap-30">
        {projectList.map((p) => (
          <CardHero
            key={p.slug}
            href={`/work/${p.slug}`}
            title={p.title}
            subtitle={p.subtitle}
            src={p.cover}
            coverType={p.coverType}
          />
        ))}
      </div>
    </section>
  )
}
