'use client'

import { useEffect, useState, type RefObject } from 'react'

type MasonryOptions = Record<string, unknown>

export function useMasonryGutter() {
  const [gutter, setGutter] = useState(48) // default ~gap-12

  useEffect(() => {
    const compute = () => {
      if (typeof window === 'undefined') return 48
      const w = window.innerWidth
      if (w >= 1536) return 120 // ~gap-30
      if (w >= 768) return 80 // ~gap-20
      return 48
    }

    const update = () => setGutter(compute())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return gutter
}

export default function useMasonry(
  gridRef: RefObject<HTMLElement>,
  deps: unknown[],
  options: MasonryOptions
) {
  useEffect(() => {
    if (!gridRef.current) return
    let instance: any
    let loader: any
    let cancelled = false
    let relayout: (() => void) | undefined

    const setup = async () => {
      const [{ default: Masonry }, { default: imagesLoaded }] = await Promise.all([
        import('masonry-layout'),
        import('imagesloaded'),
      ])

      if (!gridRef.current || cancelled) return

      instance = new Masonry(gridRef.current, {
        transitionDuration: 0,
        ...options,
      })
      loader = imagesLoaded(gridRef.current)
      relayout = () => instance?.layout()
      loader.on('progress', relayout)
    }

    void setup()

    return () => {
      cancelled = true
      if (loader) {
        loader.off('progress', relayout)
      }
      if (instance) {
        instance.destroy()
      }
    }
  }, deps)
}
