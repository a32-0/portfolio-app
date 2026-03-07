import AutoPlayVideo from '@/components/Work/AutoPlayVideo'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  type?: 'image' | 'video'
  priority?: boolean
  className?: string
}

export default function CaseStudyMedia({ src, alt, type, priority, className = '' }: Props) {
  const isVideo = type === 'video' || src.toLowerCase().endsWith('.mp4')

  if (isVideo) {
    return <AutoPlayVideo src={src} alt={alt} title={alt} className={`h-auto w-full ${className}`} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      sizes="100vw"
      priority={priority}
      className={`h-auto w-full ${className}`}
    />
  )
}
