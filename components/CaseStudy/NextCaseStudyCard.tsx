import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudyProject } from '@/data/caseStudyProjects'

type Props = {
  project: CaseStudyProject
}

export default function NextCaseStudyCard({ project }: Props) {
  const { slug, title, cover, cardCategory, cardTitle, cardSummary } = project

  return (
    <Link href={`/work/${slug}`} className="group block w-full transition-colors">
      <div className="w-full p-4 md:p-6 rounded-xl outline-1 -outline-offset-1 outline-tertiary group-hover:outline-black transition-[outline-color] duration-300 flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:justify-end">
        <div className="flex flex-1 flex-col items-start lg:items-end gap-4">
          <p className="w-full lg:text-right text-base font-normal font-sans text-primary">
            {cardCategory}
          </p>
          <h3 className="w-full lg:text-right text-2xl font-medium font-sans text-black group-link-hover-underline">
            {cardTitle}
          </h3>
          <p className="w-full lg:text-right text-base md:text-lg font-normal font-sans text-tertiary">
            {cardSummary}
          </p>
        </div>
        <div className="relative w-full lg:w-100 lg:shrink-0 overflow-hidden bg-secondary aspect-6/5">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            quality={90}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    </Link>
  )
}
