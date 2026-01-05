import Image from 'next/image'
import Link from 'next/link'
import { getProjectHighlight } from '@/data/projectHighlights'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  slug: string
  href: string
  title: string
  subtitle: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
  disabled?: boolean
}

export default function Card({
  slug,
  href,
  title,
  subtitle,
  src,
  alt,
  coverType,
  disabled,
}: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const highlight = getProjectHighlight(slug)
  const wrapperClass =
    'group block break-inside-avoid mb-20 3xl:mb-60 transition hover:-translate-y-4'

  const content = (
    <>
      <div className="w-full overflow-hidden">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={alt} title={title} />
        ) : (
          <Image
            src={src}
            alt={alt ?? title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            className="h-auto w-full max-w-360 mx-auto"
          />
        )}
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-quinary pt-4 transition group-hover:border-black">
        <p className="text-xs font-medium uppercase text-quinary transition group-hover:text-black">
          {highlight.product}
        </p>
        <p className="text-lg font-semibold group-hover:text-primary">{highlight.headline}</p>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-base text-quinary transition group-hover:text-black">
          {highlight.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm uppercase text-quinary transition group-hover:text-black">
          {highlight.tags.join(' · ')}
        </p>
      </div>
    </>
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
