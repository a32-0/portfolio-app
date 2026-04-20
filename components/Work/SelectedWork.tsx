import { projects } from '@/data/projects'
import { hasPublishedCaseStudy } from '@/data/caseStudies'
import { selectedWork } from '@/data/selectedWork'
import SelectedWorkCard from './SelectedWorkCard'

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
    <section
      id={selectedWork.id}
      className="inline-flex w-full flex-col items-start justify-start gap-20 tracking-tight"
    >
      <h2 className="text-5xl font-medium font-sans text-black">{selectedWork.title}</h2>
      {projectList.map((p) => {
        const disabled = !hasPublishedCaseStudy(p.slug)

        return (
          <SelectedWorkCard
            key={p.slug}
            slug={p.slug}
            href={`${selectedWork.projectHrefBase}/${p.slug}`}
            title={p.title}
            src={p.cover}
            coverType={p.coverType}
            disabled={disabled}
          />
        )
      })}
    </section>
  )
}
