'use client'

import { useEffect, useState, type RefObject } from 'react'

export function useKeyboardInset(ref: RefObject<HTMLElement | null>, isOpen: boolean): number {
  const [inset, setInset] = useState(0)

  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport) return

    const update = () => {
      const element = ref.current
      if (!element) return
      const { bottom } = element.getBoundingClientRect()
      setInset(Math.max(0, Math.round(bottom - (viewport.offsetTop + viewport.height))))
    }

    const frame = requestAnimationFrame(update)
    viewport.addEventListener('resize', update)
    viewport.addEventListener('scroll', update)

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener('resize', update)
      viewport.removeEventListener('scroll', update)
    }
  }, [ref, isOpen])

  return inset
}
