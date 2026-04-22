import { archiveProjects } from '@/data/projects'
import { snapshotsSection } from '@/data/snapshots'
import SnapshotCard from './SnapshotCard'

type Props = {
  limit?: number
}

export default function Snapshots({ limit }: Props) {
  const projectList =
    typeof limit === 'number' ? archiveProjects.slice(0, Math.max(limit, 0)) : archiveProjects

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
        <h2 className="w-full text-3xl font-medium font-serif italic text-black">
          {snapshotsSection.title}
        </h2>
        <p className="w-full max-w-200 text-xl font-normal font-sans text-tertiary">
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
