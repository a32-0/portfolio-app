declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const caseStudy: {
    title: string
    eyebrow: string
    metadata: {
      title: string
      description: string
    }
    navigation: Array<{
      id: string
      label: string
    }>
  }

  const MDXComponent: ComponentType<Record<string, unknown>>

  export default MDXComponent
}
