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
  const wrapperClass = 'group block w-full transition-colors'
  const cardMeta = highlight.cardMeta ?? highlight.product
  const cardTitle = highlight.cardTitle ?? highlight.headline
  const cardDescription = highlight.cardDescription ?? highlight.outcomes[0] ?? highlight.headline
  const cardMetric = highlight.cardMetric ?? highlight.outcomes[1] ?? highlight.tags.join(' · ')
  const cardTitleClass = highlight.cardTitleUnderline
    ? 'self-stretch text-3xl font-medium text-slate-700 underline decoration-1 underline-offset-2'
    : 'self-stretch text-3xl font-medium text-slate-700'

  const content = (
    <div className="inline-flex w-full flex-col items-start justify-start gap-4 lg:flex-row">
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-2 pl-3">
        <p className="self-stretch text-sm font-normal text-tertiary">{cardMeta}</p>
        <p className={cardTitleClass}>{cardTitle}</p>
        <p className="self-stretch text-base font-normal text-black">{cardDescription}</p>
        <p className="self-stretch text-sm font-normal text-tertiary">{cardMetric}</p>
      </div>
      <div className="h-80 w-full flex-1 overflow-hidden bg-zinc-300">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={alt} title={title} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={src}
            alt={alt ?? title}
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover"
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
