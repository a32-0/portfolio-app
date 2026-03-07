import { projects } from '@/data/projects'
import { selectedWork } from '@/data/selectedWork'
import { snapshotsSection } from '@/data/snapshots'
import SnapshotCard from './SnapshotCard'

type Props = {
  limit?: number
}

export default function Snapshots({ limit }: Props) {
  const selectedWorkSlugs = new Set(selectedWork.projectSlugs)
  const availableProjects = projects.filter((project) => !selectedWorkSlugs.has(project.slug))
  const projectList =
    typeof limit === 'number'
      ? availableProjects.slice(0, Math.max(limit, 0))
      : availableProjects

  const columns = projectList.reduce<[typeof projectList, typeof projectList]>(
    (acc, project, index) => {
      acc[index % 2].push(project)
      return acc
    },
    [[], []]
  )

  return (
    <section
      id={snapshotsSection.id}
      className="inline-flex w-full flex-col items-start justify-start gap-6 pb-32"
    >
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h2 className="w-full text-3xl font-medium tracking-tight text-primary">
          {snapshotsSection.title}
        </h2>
        <p className="w-full text-base font-normal tracking-tight text-black">
          {snapshotsSection.description}
        </p>
      </div>

      <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
        {columns.map((column, columnIndex) => (
          <div
            key={`snapshots-column-${columnIndex + 1}`}
            className="inline-flex w-full flex-1 flex-col items-start justify-start gap-8"
          >
            {column.map((project) => (
              <SnapshotCard
                key={project.slug}
                product={project.title}
                src={project.cover}
                coverType={project.coverType}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
