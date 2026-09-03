'use client'

import type { MouseEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import { CHAT_NAME } from '@/data/chatbot/ui'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import Logo from '@/components/ui/Logo'
import { CloseIcon, MenuIcon } from '@/components/ui/icons'
import Container from '@/components/Container'
import ChatDrawer from '@/components/Chat/ChatDrawer'
import { useChatStream } from '@/components/Chat/useChatStream'
import { useSiteNav } from '@/components/SiteNavProvider'
import { ANALYTICS_EVENTS } from '@/data/analytics'
import { trackEvent } from '@/lib/analytics'
import { useNavScroll } from './useNavScroll'
import { useEscapeKey } from './useEscapeKey'
import { getNavAppearance } from './appearance'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'

const WORK_HREF = '/#work'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const chat = useChatStream()
  const { isWorkDark, setActiveWorkView } = useSiteNav()

  const isOverlayOpen = isMenuOpen || isChatOpen
  const { isScrolled, isFooterVisible, release } = useNavScroll(isOverlayOpen)

  const [menuPathname, setMenuPathname] = useState(pathname)
  if (menuPathname !== pathname) {
    setMenuPathname(pathname)
    setIsMenuOpen(false)
  }

  const closeOverlays = useCallback(() => {
    setIsMenuOpen(false)
    setIsChatOpen(false)
  }, [])
  useEscapeKey(isOverlayOpen, closeOverlays)

  useEffect(() => {
    if (!isChatOpen) return
    document.documentElement.classList.add('chat-open')
    return () => document.documentElement.classList.remove('chat-open')
  }, [isChatOpen])

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isHome = pathname === '/'
    release(isHome)
    setIsMenuOpen(false)
    setIsChatOpen(false)
    if (isHome) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const { bgClass, textClass, isLight } = getNavAppearance({
    pathname,
    isScrolled,
    isMenuOpen,
    isFooterVisible,
    isWorkDark,
  })

  const regularLinks = navLinks.filter((link) => !link.external)
  const contactLink = navLinks.find((link) => link.external)

  const handleNavigate = (href: string) => {
    release(false)
    setIsMenuOpen(false)
    setIsChatOpen(false)
    if (href !== WORK_HREF) return
    setActiveWorkView('product')
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
          className="transition hover:opacity-90"
          onClick={handleLogoClick}
          onPointerEnter={(event) => setIsLogoHovered(event.pointerType === 'mouse')}
          onPointerLeave={() => setIsLogoHovered(false)}
        >
          <Logo size={40} animation={isLogoHovered ? 'default' : 'rest'} />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <NavLinks links={regularLinks} variant="desktop" onNavigate={handleNavigate} />
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

      <MobileMenu
        isOpen={isMenuOpen}
        bgClass={bgClass}
        links={regularLinks}
        contactLink={contactLink}
        onNavigate={handleNavigate}
        onClose={() => setIsMenuOpen(false)}
      />

      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} chat={chat} />
    </nav>
  )
}
