import Image from 'next/image'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  product: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
}

export default function ArchiveCard({ product, src, alt, coverType }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')
  const mediaAlt = alt ?? product

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
      <div className="w-full">
        {isVideo ? (
          <AutoPlayVideo
            src={src}
            alt={mediaAlt}
            title={product}
            className="h-auto w-full"
          />
        ) : (
          <Image
            src={src}
            alt={mediaAlt}
            width={1200}
            height={836}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
        )}
      </div>
      <div className="inline-flex w-full items-center justify-start">
        <p className="text-sm font-normal text-secondary">{product}</p>
      </div>
    </div>
  )
}
