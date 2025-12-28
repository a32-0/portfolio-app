import { projects } from '@/data/projects'
import { getCaseStudyImage } from '@/lib/caseStudy'
import CardHero from './CardHero'

type Props = {
  limit?: number
}

export default function GridHero({ limit = 2 }: Props) {
  const projectList = projects.slice(0, limit)

  return (
    <section id="work" className="w-full px-8">
      <div className="flex flex-col gap-2 mb-6">
        <p className="text-xl font-light uppercase text-primary">Work</p>
        <h2 className="text-4xl font-medium md:text-5xl">Selected work I’ve shipped</h2>
      </div>
      <div className="columns-1 md:columns-2 gap-20 3xl:gap-60 [column-fill:balance]">
        {projectList.map((p) => {
          const hasCaseStudy = !!getCaseStudyImage(p.slug)
          const disabled = !hasCaseStudy

          return (
            <CardHero
              key={p.slug}
              href={`/work/${p.slug}`}
              title={p.title}
              subtitle={p.subtitle}
              src={p.cover}
              coverType={p.coverType}
              disabled={disabled}
            />
          )
        })}
      </div>
    </section>
  )
}
