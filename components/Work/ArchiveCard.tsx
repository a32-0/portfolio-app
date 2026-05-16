import Image from 'next/image'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  product: string
  src: string
  coverType?: 'image' | 'video'
  coverWidth?: number
  coverHeight?: number
  alt?: string
}

export default function ArchiveCard({ product, src, alt, coverType, coverWidth, coverHeight }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const mediaAlt = alt ?? product

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
      <div className="w-full rounded-xl overflow-hidden bg-secondary">
        {isVideo ? (
          <AutoPlayVideo src={src} alt={mediaAlt} title={product} />
        ) : (
          <Image
            src={src}
            alt={mediaAlt}
            width={coverWidth ?? 1200}
            height={coverHeight ?? 800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="inline-flex w-full items-center justify-start">
        <p className="text-sm font-normal text-secondary">{product}</p>
      </div>
    </div>
  )
}
