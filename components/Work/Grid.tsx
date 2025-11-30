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
      <div className="grid md:gap-20 grid-cols-1 gap-10 md:grid-cols-3 2xl:grid-cols-4">
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
