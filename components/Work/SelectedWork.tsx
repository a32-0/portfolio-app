import { projects } from '@/data/projects'
import { selectedWork } from '@/data/selectedWork'
import { getCaseStudyImage } from '@/lib/caseStudy'
import Card from './Card'

type Props = {
  limit?: number
}

export default function SelectedWork({ limit }: Props) {
  const selectedProjects = selectedWork.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => !!project)
  const projectList =
    typeof limit === 'number' ? selectedProjects.slice(0, Math.max(limit, 0)) : selectedProjects

  return (
    <section id={selectedWork.id} className="inline-flex w-full flex-col items-start justify-start gap-8">
      <h2 className="self-stretch text-3xl font-medium tracking-tight text-black">
        {selectedWork.title}
      </h2>
      <div className="h-px w-full bg-zinc-300" />
      {projectList.map((p, index) => {
        const hasCaseStudy = !!getCaseStudyImage(p.slug)
        const disabled = !hasCaseStudy
        const isLast = index === projectList.length - 1

        return (
          <div key={p.slug} className="w-full">
            <Card
              slug={p.slug}
              href={`${selectedWork.projectHrefBase}/${p.slug}`}
              title={p.title}
              src={p.cover}
              coverType={p.coverType}
              disabled={disabled}
            />
            {!isLast && <div className="mt-8 h-px w-full bg-zinc-300" />}
          </div>
        )
      })}
    </section>
  )
}
