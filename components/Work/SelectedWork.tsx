import { featuredProjects } from '@/data/projects'
import SelectedWorkCard from './SelectedWorkCard'

type Props = {
  limit?: number
}

const SECTION_TITLE = 'Case studies'

export default function SelectedWork({ limit }: Props) {
  const projectList =
    typeof limit === 'number' ? featuredProjects.slice(0, Math.max(limit, 0)) : featuredProjects

  return (
    <section
      id="work"
      className="inline-flex w-full flex-col items-start justify-start gap-8 scroll-mt-24"
    >
      <h2 className="text-5xl font-medium font-serif italic text-primary">{SECTION_TITLE}</h2>
      {projectList.map((project) => (
        <SelectedWorkCard key={project.slug} project={project} />
      ))}
    </section>
  )
}
