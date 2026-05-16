import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import AutoPlayVideo from '@/components/Work/AutoPlayVideo'

type Props = {
  project: Project
}

export default function NextCaseStudyCard({ project }: Props) {
  const { slug, title, cover, coverType, cardCategory, cardTitle, cardTags } = project
  const isVideo = coverType === 'video' || cover.toLowerCase().endsWith('.mp4')

  return (
    <Link href={`/work/${slug}`} className="group block w-full transition-colors">
      <div className="w-full p-6 rounded-xl outline-1 -outline-offset-1 outline-tertiary group-hover:outline-black transition-[outline-color] duration-300 inline-flex justify-end items-start gap-6">
        <div className="flex flex-1 flex-col items-end gap-4">
          <p className="w-full text-right text-base font-normal font-sans text-primary">
            {cardCategory}
          </p>
          <h3 className="w-full text-right text-2xl font-medium font-sans text-black group-link-hover-underline">
            {cardTitle}
          </h3>
          <p className="w-full text-right text-lg font-normal font-sans text-tertiary">
            {cardTags?.join(' · ')}
          </p>
        </div>
        <div className="relative w-100 shrink-0 overflow-hidden rounded-xl bg-secondary aspect-6/5">
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
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          )}
        </div>
      </div>
    </Link>
  )
}
