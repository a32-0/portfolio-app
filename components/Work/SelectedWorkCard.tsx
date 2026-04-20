import Image from 'next/image'
import Link from 'next/link'
import { getSelectedWorkHighlight } from '@/data/selectedWorkHighlights'
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

export default function SelectedWorkCard({ slug, href, title, src, alt, coverType, disabled }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const { cardCategory, cardTitle, cardTags } = getSelectedWorkHighlight(slug)

  const content = (
    <div className="inline-flex w-full items-start justify-end gap-6 tracking-tight">
      <div className="flex flex-1 flex-col items-end gap-4">
        <p className="w-full text-right text-lg font-normal font-sans text-primary">
          {cardCategory}
        </p>
        <h3 className={`w-full text-right text-3xl font-medium font-serif text-black ${disabled ? '' : 'group-link-hover-underline'}`}>
          {cardTitle}
        </h3>
        <p className="w-full text-right text-xl font-normal font-sans text-black">
          {cardTags.join(' · ')}
        </p>
      </div>
      <div className="w-150 shrink-0 overflow-hidden bg-secondary aspect-6/5">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={alt} title={title} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={src}
            alt={alt ?? title}
            width={1200}
            height={1000}
            sizes="600px"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  )

  if (disabled) {
    return <div className="w-full">{content}</div>
  }

  return (
    <Link href={href} className="group block w-full transition-colors">
      {content}
    </Link>
  )
}
