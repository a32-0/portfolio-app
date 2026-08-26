import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  project: Project
}

export default function SelectedWorkCard({ project }: Props) {
  const { slug, title, cover, coverType, caseStudy, cardCategory, cardTitle, cardSummary } = project
  const isVideo = coverType === 'video' || cover.toLowerCase().endsWith('.mp4')
  const href = `/work/${slug}`

  const content = (
    <div className="w-full p-4 md:p-6 rounded-[30px] outline-1 -outline-offset-1 outline-tertiary group-hover:outline-black transition-[outline-color] duration-300 flex flex-col-reverse gap-8 lg:flex-row lg:items-start lg:justify-end">
      <div className="flex flex-1 flex-col items-start lg:items-end gap-4">
        <p className="w-full lg:text-right text-base md:text-lg font-normal font-sans text-primary">
          {cardCategory}
        </p>
        <h3
          className={`w-full lg:text-right text-display-sm font-medium font-sans text-black ${caseStudy ? 'group-link-hover-underline' : ''}`}
        >
          {cardTitle}
        </h3>
        <p className="w-full lg:text-right text-base md:text-xl font-normal font-sans text-tertiary">
          {cardSummary}
        </p>
      </div>
      <div className="relative w-full lg:w-150 lg:shrink-0 overflow-hidden bg-secondary aspect-6/5">
        {isVideo ? (
          <AutoPlayVideo
            src={cover}
            title={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        )}
      </div>
    </div>
  )

  if (!caseStudy) {
    return <div className="w-full">{content}</div>
  }

  return (
    <Link href={href} className="group block w-full transition-colors">
      {content}
    </Link>
  )
}
