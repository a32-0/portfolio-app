type NavAppearanceInput = {
  pathname: string
  isScrolled: boolean
  isMenuOpen: boolean
  isFooterVisible: boolean
  isWorkDark: boolean
}

type NavAppearance = {
  bgClass: string
  textClass: string
  isLight: boolean
}

// Derives the header's background/text classes from route, scroll and overlay state.
export function getNavAppearance({
  pathname,
  isScrolled,
  isMenuOpen,
  isFooterVisible,
  isWorkDark,
}: NavAppearanceInput): NavAppearance {
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

  return { bgClass, textClass, isLight }
}
