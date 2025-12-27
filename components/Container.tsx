import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Props<T extends ElementType> = {
  as?: T
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: Props<T>) {
  const Tag = (as || 'div') as ElementType
  const base = 'mx-auto w-full max-w-300'
  return (
    <Tag className={`${base} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
