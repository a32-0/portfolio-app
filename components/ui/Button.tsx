import Link from 'next/link'
import type { MouseEventHandler, ReactNode } from 'react'

/** Fill colour a tone resolves to: solid uses it as the resting state, outline as its hover. */
const TONE_SOLID = {
  primary: 'bg-primary text-white',
  teal: 'bg-complement-teal text-black',
} as const

const TONE_HOVER_FILL = {
  primary: '[--btn-hover-bg:var(--color-primary)] [--btn-hover-fg:var(--color-white)]',
  teal: '[--btn-hover-bg:var(--color-complement-teal)] [--btn-hover-fg:var(--color-black)]',
} as const

type Props = {
  /** Omit to render a <button> instead of a link. */
  href?: string
  children: ReactNode
  /** 'gradient' is the CatarsisLLM treatment and ignores outlineColor and tone. */
  variant?: 'outline' | 'gradient' | 'solid'
  /** Colour a 'solid' button fills with, and the colour 'outline' fills with on hover.
   * Left unset, outline hovers to --color-accent. */
  tone?: keyof typeof TONE_SOLID
  outlineColor?: 'black' | 'white'
  target?: string
  rel?: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
  'aria-expanded'?: boolean
  'aria-current'?: 'true' | 'page'
}

export default function Button({
  href,
  children,
  variant = 'outline',
  tone,
  outlineColor = 'black',
  target,
  rel,
  className,
  onClick,
  type = 'button',
  disabled,
  ...aria
}: Props) {
  const parts = [
    'inline-flex items-center justify-center px-6 py-4 rounded-[30px] text-base leading-none',
  ]

  if (variant === 'gradient') {
    parts.push('bg-gradient-catarsis text-black transition-opacity hover:opacity-90')
  } else if (variant === 'solid') {
    parts.push('transition-colors duration-200', TONE_SOLID[tone ?? 'primary'])
  } else {
    parts.push('btn-pill outline-1 -outline-offset-1')
    parts.push(outlineColor === 'white' ? 'outline-white text-white' : 'outline-black text-black')
    if (tone) parts.push(TONE_HOVER_FILL[tone])
  }

  if (className) parts.push(className)
  const base = parts.join(' ')

  if (!href) {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={base} {...aria}>
        {children}
      </button>
    )
  }

  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  )
}
