import Image from 'next/image'
import Link from 'next/link'
import AutoPlayVideo from './AutoPlayVideo'

type Props = {
  href: string
  title: string
  subtitle: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
}

export default function Card({ href, title, subtitle, src, alt, coverType }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')

  return (
    <Link href={href} className="block break-inside-avoid mb-20 3xl:mb-60">
      <div className="w-full">
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
      <div className="uppercase items-center pt-2 justify-between flex text-sm">
        <h3 className="font-base">{title}</h3>
        <h3 className="font-light text-tertiary">{subtitle}</h3>
      </div>
    </Link>
  )
}
