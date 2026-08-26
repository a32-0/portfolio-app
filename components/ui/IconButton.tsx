import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  'aria-expanded'?: boolean
}

const BASE_CLASSES =
  'bg-primary text-white flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80 disabled:pointer-events-none disabled:opacity-40'

export default function IconButton({
  children,
  label,
  onClick,
  type = 'button',
  disabled,
  className,
  ...aria
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={className ? `${BASE_CLASSES} ${className}` : BASE_CLASSES}
      {...aria}
    >
      {children}
    </button>
  )
}
