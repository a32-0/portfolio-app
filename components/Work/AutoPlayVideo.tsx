'use client'

import { useEffect, useRef } from 'react'

type Props = {
  src: string
  title: string
  alt?: string
}

// Plays the video when visible and pauses when it exits viewport.
export default function AutoPlayVideo({ src, alt, title }: Props) {
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
