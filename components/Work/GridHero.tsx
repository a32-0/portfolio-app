import CardHero from './CardHero'
import { projects } from '@/data/projects'

type Props = {
  limit?: number
}

export default function GridHero({ limit = 2 }: Props) {
  const projectList = projects.slice(0, limit)

  return (
    <section id="work" className="w-full px-6">
      <h1 className="uppercase text-primary font-light mb-4 text-2xl">Work</h1>
      <div className="columns-1 md:columns-2 columns-2000-4 gap-10 md:gap-14 xl:gap-16 [column-fill:balance]">
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
