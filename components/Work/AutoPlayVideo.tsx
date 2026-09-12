'use client'

import { useEffect, useRef } from 'react'

type Props = {
  src: string
  title: string
  alt?: string
  className?: string
  width?: number
  height?: number
  poster?: string
}

// Plays the video when visible and pauses when it exits viewport.
export default function AutoPlayVideo({
  src,
  alt,
  title,
  className,
  width,
  height,
  poster,
}: Props) {
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
      width={width}
      height={height}
      poster={poster}
      style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
      playsInline
      loop
      muted
      preload="none"
      className={className ?? 'h-auto w-full'}
      aria-label={alt ?? title}
    />
  )
}
