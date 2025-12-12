import Card from './Card'
import { projects } from '@/data/projects'

type Props = {
  skip?: number
  limit?: number
}

export default function Grid({ skip = 2, limit }: Props) {
  const projectList = projects.slice(skip, typeof limit === 'number' ? skip + limit : undefined)

  return (
    <section className="w-full px-8">
      <div className="columns-2 xl:columns-3 columns-2000-4 gap-20 3xl:gap-60 [column-fill:balance]">
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
