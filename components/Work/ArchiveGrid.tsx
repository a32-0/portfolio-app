import { archiveProjects } from '@/data/projects'
import { archiveSection } from '@/data/archive'
import ArchiveCard from './ArchiveCard'

type Props = {
  limit?: number
}

export default function ArchiveGrid({ limit }: Props) {
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
      id={archiveSection.id}
      className="inline-flex w-full flex-col items-start justify-start gap-12 pb-32"
    >
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h2 className="w-full text-5xl font-medium font-serif italic text-white">
          {archiveSection.title}
        </h2>
        <p className="w-full max-w-200 text-xl font-normal font-sans text-white">
          {archiveSection.description}
        </p>
      </div>

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
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
