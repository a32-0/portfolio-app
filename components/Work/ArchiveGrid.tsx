import { archiveProjects } from '@/data/projects'
import ArchiveCard from './ArchiveCard'

export default function ArchiveGrid() {
  const columns = archiveProjects.reduce<[typeof archiveProjects, typeof archiveProjects]>(
    (acc, project, index) => {
      acc[index % 2].push(project)
      return acc
    },
    [[], []]
  )

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-8 md:gap-12">
      <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
        {columns.map((column, columnIndex) => (
          <div
            key={`archive-column-${columnIndex + 1}`}
            className="inline-flex w-full flex-1 flex-col items-start justify-start gap-8"
          >
            {column.map((project) => (
              <ArchiveCard
                key={project.slug}
                product={project.title}
                src={project.cover}
                coverType={project.coverType}
                coverWidth={project.coverWidth}
                coverHeight={project.coverHeight}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
