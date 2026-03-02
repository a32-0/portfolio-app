import Image from 'next/image'
import Link from 'next/link'
import { getProjectHighlight } from '@/data/projectHighlights'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  slug: string
  href: string
  title: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
  disabled?: boolean
}

export default function Card({ slug, href, title, src, alt, coverType, disabled }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const highlight = getProjectHighlight(slug)
  const wrapperClass = `${disabled ? 'block' : 'group block'} w-full transition-colors`
  const cardMeta = highlight.cardMeta
  const cardTitle = highlight.cardTitle
  const cardLead = highlight.cardLead
  const cardPoints = highlight.cardPoints
  const cardMetric = highlight.cardMetric
  const cardTitleClass = `text-[40px] leading-[1.04] font-medium text-black ${disabled ? '' : 'group-link-hover-underline'}`

  const content = (
    <div className="inline-flex w-full flex-col items-start justify-start gap-4 lg:flex-row">
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
        <p className=" text-lg font-normal text-tertiary">{cardMeta}</p>
        <p className={cardTitleClass}>{cardTitle}</p>
        <div className=" flex flex-col gap-6 text-xl leading-[1.08] font-normal text-black">
          <p>{cardLead}</p>
          {cardPoints.length > 0 && (
            <ul className="list-disc pl-8">
              {cardPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
        {cardMetric ? <p className="text-lg font-normal text-tertiary">{cardMetric}</p> : null}
      </div>
      <div className="w-full flex-1 overflow-hidden rounded-[28px] bg-zinc-300">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={alt} title={title} className="h-auto w-full" />
        ) : (
          <Image
            src={src}
            alt={alt ?? title}
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
          />
        )}
      </div>
    </div>
  )

  if (disabled) {
    return <div className={wrapperClass}>{content}</div>
  }

  return (
    <Link href={href} className={wrapperClass}>
      {content}
    </Link>
  )
}
