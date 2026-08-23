import Link from 'next/link'
import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
  /** Omit to render a <button> instead of a link. */
  href?: string
  children: ReactNode
  /** 'gradient' is the CatarsisLLM treatment and ignores outlineColor. */
  variant?: 'outline' | 'gradient'
  outlineColor?: 'black' | 'white'
  target?: string
  rel?: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
  'aria-expanded'?: boolean
}

export default function Button({
  href,
  children,
  variant = 'outline',
  outlineColor = 'black',
  target,
  rel,
  className,
  onClick,
  type = 'button',
  disabled,
  ...aria
}: Props) {
  const outline = outlineColor === 'white' ? 'outline-white' : 'outline-black'
  const variantClass =
    variant === 'gradient'
      ? 'bg-gradient-catarsis text-black transition-opacity hover:opacity-90'
      : `btn-pill outline-1 -outline-offset-1 ${outline}`
  const base = `inline-flex items-center justify-center px-6 py-4 rounded-[30px] text-base leading-none ${variantClass}${className ? ` ${className}` : ''}`

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
