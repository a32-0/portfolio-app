'use client'

import { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from 'lottie-web'

type LogoAnimation = 'rest' | 'default' | 'staring' | 'thinking'

type Props = {
  size?: number
  animation?: LogoAnimation
  className?: string
}

/** default belongs to the navigation; the chat picks the one that matches what it is doing. */
const ANIMATION_PATHS: Record<Exclude<LogoAnimation, 'rest'>, string> = {
  default: '/icons/Eyeball.json',
  staring: '/icons/Eyeball_Staring.json',
  thinking: '/icons/Eyeball_Thinking.json',
}

const FADE_MS = 300

export default function Logo({ size = 40, animation = 'default', className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<AnimationItem | null>(null)
  const loadedPathRef = useRef<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const showPlayer = isLoaded && animation !== 'rest'

  useEffect(() => {
    return () => {
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (animation === 'rest') {
      if (!playerRef.current) return
      const timer = setTimeout(() => {
        playerRef.current?.destroy()
        playerRef.current = null
        loadedPathRef.current = null
        setIsLoaded(false)
      }, FADE_MS)
      return () => clearTimeout(timer)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const path = ANIMATION_PATHS[animation]
    if (playerRef.current && loadedPathRef.current === path) return

    playerRef.current?.destroy()
    playerRef.current = null
    loadedPathRef.current = path

    let isStale = false

    import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
      if (isStale) return
      const player = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path,
      })
      player.addEventListener('DOMLoaded', () => setIsLoaded(true))
      playerRef.current = player
    })

    return () => {
      isStale = true
    }
  }, [animation])

  return (
    <div
      aria-hidden="true"
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
          fill="white"
        />
        <path
          d="M24.0006 44.6265C35.392 44.6265 44.6265 35.392 44.6265 24.0007C44.6265 12.6093 35.392 3.3748 24.0006 3.3748C12.6093 3.3748 3.37476 12.6093 3.37476 24.0007C3.37476 35.392 12.6093 44.6265 24.0006 44.6265Z"
          fill="black"
        />
        <path
          d="M28.4351 32.904C35.8021 32.904 41.7742 26.9319 41.7742 19.5649C41.7742 12.1979 35.8021 6.22573 28.4351 6.22573C21.0681 6.22573 15.0959 12.1979 15.0959 19.5649C15.0959 26.9319 21.0681 32.904 28.4351 32.904Z"
          fill="white"
        />
        <path
          d="M29.4709 26.329C33.9022 26.329 37.4945 22.7367 37.4945 18.3054C37.4945 13.8741 33.9022 10.2818 29.4709 10.2818C25.0396 10.2818 21.4473 13.8741 21.4473 18.3054C21.4473 22.7367 25.0396 26.329 29.4709 26.329Z"
          fill="black"
        />
        <path
          d="M34.5629 17.2722C36.6627 17.2722 38.365 15.57 38.365 13.4701C38.365 11.3703 36.6627 9.668 34.5629 9.668C32.463 9.668 30.7607 11.3703 30.7607 13.4701C30.7607 15.57 32.463 17.2722 34.5629 17.2722Z"
          fill="white"
        />
        <path
          d="M23.687 25.2694C24.6259 25.2694 25.387 24.5083 25.387 23.5694C25.387 22.6305 24.6259 21.8694 23.687 21.8694C22.7482 21.8694 21.9871 22.6305 21.9871 23.5694C21.9871 24.5083 22.7482 25.2694 23.687 25.2694Z"
          fill="white"
        />
      </svg>
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          showPlayer ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
