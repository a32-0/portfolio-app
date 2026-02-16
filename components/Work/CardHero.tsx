import Image from 'next/image'
import Link from 'next/link'
import { getProjectHighlight } from '@/data/projectHighlights'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  slug: string
  href: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
  disabled?: boolean
}

export default function CardHero({ slug, href, src, alt, coverType, disabled }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const highlight = getProjectHighlight(slug)
  const wrapperClass = 'group block break-inside-avoid transition hover:-translate-y-2'
  const cardLabel = highlight.cardMeta?.split('·')[0]?.trim() || highlight.product
  const cardTags = highlight.tags.join(' · ')
  const mediaAlt = alt ?? highlight.product

  const content = (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
      <div className="w-full overflow-hidden">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={mediaAlt} title={highlight.product} className="h-96 w-full object-cover" />
        ) : (
          <Image
            src={src}
            alt={mediaAlt}
            width={1200}
            height={836}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-96 w-full object-cover"
          />
        )}
      </div>
      <div className="inline-flex w-full items-center justify-between gap-4">
        <p className="text-sm font-normal text-neutral-600">{cardLabel}</p>
        <p className="text-sm font-normal text-neutral-600">{cardTags}</p>
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
