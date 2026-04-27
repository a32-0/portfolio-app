import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  project: Project
}

export default function SelectedWorkCard({ project }: Props) {
  const { slug, title, cover, coverType, caseStudy, cardCategory, cardTitle, cardTags } = project
  const isVideo = coverType === 'video' || cover.toLowerCase().endsWith('.mp4')
  const href = `/work/${slug}`

  const content = (
    <div className="w-full p-6 rounded-2xl outline-1 -outline-offset-1 outline-tertiary group-hover:outline-black transition-[outline-color] duration-300 inline-flex justify-end items-start gap-6">
      <div className="flex flex-1 flex-col items-end gap-4">
        <p className="w-full text-right text-lg font-normal font-sans text-primary">
          {cardCategory}
        </p>
        <h3
          className={`w-full text-right text-3xl font-medium font-sans text-black ${caseStudy ? 'group-link-hover-underline' : ''}`}
        >
          {cardTitle}
        </h3>
        <p className="w-full text-right text-xl font-normal font-sans text-tertiary">
          {cardTags?.join(' · ')}
        </p>
      </div>
      <div className="relative w-150 shrink-0 overflow-hidden rounded-2xl bg-secondary aspect-6/5">
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
            sizes="600px"
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
