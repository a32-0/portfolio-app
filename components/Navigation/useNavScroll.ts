import { useEffect, useRef, useState } from 'react'

type ScrollLockSnapshot = {
  overflow: string
  position: string
  top: string
  width: string
  offset: number
}

// Tracks header background state and locks body scroll while an overlay (menu or chat) is open.
export function useNavScroll(isOverlayOpen: boolean) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const scrollLock = useRef<ScrollLockSnapshot | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (scrollLock.current) return
      setIsScrolled(window.scrollY > 12)
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      setIsFooterVisible(atBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const release = (restoreScroll: boolean) => {
    const lock = scrollLock.current
    if (!lock) return
    scrollLock.current = null

    const { body } = document
    body.style.overflow = lock.overflow
    body.style.position = lock.position
    body.style.top = lock.top
    body.style.width = lock.width
    if (restoreScroll) window.scrollTo({ top: lock.offset, behavior: 'instant' })
  }

  useEffect(() => {
    if (!isOverlayOpen) return

    const { body } = document
    const offset = window.scrollY
    scrollLock.current = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      offset,
    }

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${offset}px`
    body.style.width = '100%'

    return () => release(true)
  }, [isOverlayOpen])

  return { isScrolled, isFooterVisible, release }
}
