'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

type Props = {
  href: string
  title: string
  subtitle: string
  src: string
  coverType?: 'image' | 'video'
  alt?: string
}

function AutoPlayVideo({ src, alt, title }: { src: string; alt?: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.play().catch(() => {})
        } else {
          node.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      node.pause()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      playsInline
      loop
      muted
      preload="metadata"
      className="h-auto w-full"
      aria-label={alt ?? title}
    />
  )
}

export default function Card({ href, title, subtitle, src, alt, coverType }: Props) {
  const isVideo = coverType === 'video' || src.toLowerCase().endsWith('.mp4')

  return (
    <Link href={href} className="block">
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
            className="h-auto w-full"
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
