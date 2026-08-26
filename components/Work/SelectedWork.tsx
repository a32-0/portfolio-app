import { featuredProjects } from '@/data/projects'
import SelectedWorkCard from './SelectedWorkCard'

export default function SelectedWork() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-12">
      {featuredProjects.map((project) => (
        <SelectedWorkCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
