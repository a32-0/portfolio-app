'use client'

import type { MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import { CHAT_NAME } from '@/data/chatbot/ui'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import { CloseIcon, MenuIcon } from '@/components/ui/icons'
import Container from '@/components/Container'
import ChatDrawer from '@/components/Chat/ChatDrawer'
import { useChatStream } from '@/components/Chat/useChatStream'
import { useSiteNav } from '@/components/SiteNavProvider'
import { ANALYTICS_EVENTS } from '@/data/analytics'
import { trackEvent } from '@/lib/analytics'

const WORK_HREF = '/#work'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const scrollLock = useRef<{
    overflow: string
    position: string
    top: string
    width: string
    offset: number
  } | null>(null)
  // owned here, not in ChatDrawer, so the conversation survives closing the drawer
  const chat = useChatStream()
  const { isWorkDark, setActiveWorkView } = useSiteNav()

  useEffect(() => {
    // Locking scroll collapses the document height, snapping window.scrollY to 0 and
    // firing a scroll event that isn't a real user scroll — ignore it while locked.
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

  const [menuPathname, setMenuPathname] = useState(pathname)
  if (menuPathname !== pathname) {
    setMenuPathname(pathname)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!isMenuOpen && !isChatOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsChatOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen, isChatOpen])

  // Releasing the scroll lock has to happen before a navigation commits: a fixed body
  // swallows the router's scroll to the hash, and restoring the offset undoes it.
  const releaseScrollLock = (restoreScroll: boolean) => {
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
    if (!isMenuOpen && !isChatOpen) return

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

    return () => releaseScrollLock(true)
  }, [isMenuOpen, isChatOpen])

  useEffect(() => {
    if (!isChatOpen) return
    document.documentElement.classList.add('chat-open')
    return () => document.documentElement.classList.remove('chat-open')
  }, [isChatOpen])

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isHome = pathname === '/'
    releaseScrollLock(isHome)
    setIsMenuOpen(false)
    setIsChatOpen(false)
    if (isHome) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isLightPage = pathname.startsWith('/work/') || pathname === '/about'
  const onDarkWork = isWorkDark && pathname === '/'
  const solid = isScrolled || isMenuOpen

  const bgClass = isFooterVisible
    ? 'bg-primary'
    : isLightPage || solid
      ? onDarkWork
        ? 'bg-black'
        : 'bg-white'
      : 'bg-transparent'

  const isLight = (isLightPage || solid) && !isFooterVisible && !onDarkWork
  const textClass = isLight ? 'text-black' : 'text-white'

  const regularLinks = navLinks.filter((link) => !link.external)
  const contactLink = navLinks.find((link) => link.external)

  const closeMenu = () => setIsMenuOpen(false)

  // In-app links: the destination owns the scroll, so the locked offset is dropped.
  // Both overlays close, otherwise the one left open locks the body again mid-navigation.
  const handleNavigate = (href: string) => {
    releaseScrollLock(false)
    setIsMenuOpen(false)
    setIsChatOpen(false)
    if (href !== WORK_HREF) return
    setActiveWorkView('product')
    // The router raises no scroll intent for the URL it is already on
    if (pathname === '/') document.getElementById('work')?.scrollIntoView()
  }

  return (
    <nav
      className={`w-full rounded-b-xl font-sans text-base font-normal transition-[background-color,color] duration-300 ease-out motion-reduce:transition-none ${bgClass} ${textClass}`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          aria-label="Back to home"
          className="transition hover:opacity-50"
          onClick={handleLogoClick}
        >
          <Image src="/icons/catarsis.svg" width={40} height={40} alt="Catarsis" priority />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {regularLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => handleNavigate(link.href)}
              className="hidden md:inline link-hover-underline hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          {contactLink && (
            <div className="hidden md:block">
              <Button
                href={contactLink.href}
                outlineColor={isLight ? 'black' : 'white'}
                target="_blank"
                rel="noreferrer"
              >
                {contactLink.label} ↗
              </Button>
            </div>
          )}

          <Button
            variant="gradient"
            onClick={() => {
              if (!isChatOpen) trackEvent(ANALYTICS_EVENTS.chatOpen)
              setIsChatOpen((open) => !open)
            }}
            aria-expanded={isChatOpen}
            aria-label={isChatOpen ? 'Close chat' : `Open ${CHAT_NAME} chat`}
          >
            {CHAT_NAME}
          </Button>

          <div className="md:hidden">
            <IconButton
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 -z-10 overflow-y-auto ${bgClass} transition-opacity duration-200 starting:opacity-0`}
        >
          <Container className="flex flex-col items-start gap-6 pt-20 pb-12">
            {regularLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavigate(link.href)}
                className="py-2 text-3xl link-hover-underline hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            {contactLink && (
              <a
                href={contactLink.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="py-2 text-3xl link-hover-underline hover:opacity-70"
              >
                {contactLink.label} ↗
              </a>
            )}
          </Container>
        </div>
      )}

      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} chat={chat} />
    </nav>
  )
}
