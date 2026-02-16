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
    <section id={selectedWork.id} className="w-full border-l border-secondary pl-3">
      <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:flex-row">
        <h2 className="w-full text-2xl font-medium text-black lg:max-w-55 tracking-tight">
          {selectedWork.title}
        </h2>
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 border-l border-secondary pl-3">
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
        </div>
      </div>
    </section>
  )
}
