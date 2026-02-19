import Image from 'next/image'
import { projects } from '@/data/projects'
import { snapshotsSection } from '@/data/snapshots'
import AutoPlayVideo from './AutoPlayVideo'
import CardSnapshots from './CardSnapshots'

type Props = {
  limit?: number
}

type ProjectLike = (typeof projects)[number]

function getProjectBySlug(slug: string): ProjectLike | null {
  return projects.find((project) => project.slug === slug) ?? null
}

export default function Snapshots({ limit }: Props) {
  const columns =
    typeof limit === 'number'
      ? snapshotsSection.columns.map((column) => column.slice(0, Math.max(limit, 0)))
      : snapshotsSection.columns

  return (
    <section
      id={snapshotsSection.id}
      className="inline-flex w-full flex-col items-start justify-start gap-6 pb-32"
    >
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <h2 className="w-full text-3xl font-medium text-primary tracking-tight">
          {snapshotsSection.title}
        </h2>
        <p className="w-full text-base font-normal text-black tracking-tight">
          {snapshotsSection.description}
        </p>
      </div>

      <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
        {columns.map((column, columnIndex) => (
          <div
            key={`grid-hero-column-${columnIndex + 1}`}
            className="inline-flex w-full flex-1 flex-col items-start justify-start gap-8"
          >
            {column.map((item) => {
              const project = getProjectBySlug(item.slug)
              if (!project) return null

              if (item.variant === 'card') {
                return (
                  <CardSnapshots
                    key={item.id}
                    product={project.title}
                    src={project.cover}
                    coverType={project.coverType}
                  />
                )
              }

              const isVideo =
                project.coverType === 'video' || project.cover.toLowerCase().endsWith('.mp4')
              const cardLabel = project.title

              return (
                <div
                  key={item.id}
                  className="inline-flex w-full flex-col items-start justify-start gap-2"
                >
                  <div className="w-full">
                    {isVideo ? (
                      <AutoPlayVideo
                        src={project.cover}
                        title={project.title}
                        alt={project.title}
                        className="h-auto w-full"
                      />
                    ) : (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={1200}
                        height={900}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-auto w-full"
                      />
                    )}
                  </div>
                  <div className="inline-flex w-full items-center justify-start">
                    <p className="text-sm font-normal text-neutral-600">{cardLabel}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
