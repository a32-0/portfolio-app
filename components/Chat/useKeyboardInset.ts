'use client'

import { useEffect, useState } from 'react'

export function useKeyboardInset(): number {
  const [inset, setInset] = useState(0)

  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport) return

    const update = () =>
      setInset(Math.max(0, Math.round(window.innerHeight - viewport.height - viewport.offsetTop)))

    const frame = requestAnimationFrame(update)
    viewport.addEventListener('resize', update)
    viewport.addEventListener('scroll', update)

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener('resize', update)
      viewport.removeEventListener('scroll', update)
    }
  }, [])

  return inset
}
