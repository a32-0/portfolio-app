import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  size?: 'md' | 'sm'
  'aria-expanded'?: boolean
}

const BASE_CLASSES =
  'bg-primary text-white flex shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80 disabled:pointer-events-none disabled:opacity-40'

const SIZE_CLASSES = {
  md: 'h-12 w-12',
  sm: 'h-8 w-8',
}

export default function IconButton({
  children,
  label,
  onClick,
  type = 'button',
  disabled,
  className,
  size = 'md',
  ...aria
}: Props) {
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]}${className ? ` ${className}` : ''}`
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={classes}
      {...aria}
    >
      {children}
    </button>
  )
}
