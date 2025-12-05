import Card from './Card'
import { projects } from '@/data/projects'

type Props = {
  skip?: number
  limit?: number
}

export default function Grid({ skip = 2, limit }: Props) {
  const projectList = projects.slice(skip, typeof limit === 'number' ? skip + limit : undefined)

  return (
    <section className="mx-8">
      <div className="columns-1 md:columns-2 lg:columns-3 2xl:columns-4 gap-12 md:gap-20 2xl:gap-30 [column-fill:balance]">
        {projectList.map((p) => (
          <Card
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
