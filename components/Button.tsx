import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type BaseProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'>
type LinkProps = BaseProps & ComponentPropsWithoutRef<typeof Link>

const variantClasses: Record<Variant, string> = {
  primary:
    'border border-primary text-primary font-weight hover:bg-primary text-base hover:text-white',
  secondary: 'text-black hover:bg-primary text-base font-weight hover:text-white',
  ghost: 'text-primary hover:bg-primary/10',
}

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 uppercase transition ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export function ButtonLink({ variant = 'primary', className = '', children, ...rest }: LinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 uppercase transition ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  )
}
