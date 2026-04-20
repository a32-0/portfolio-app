export type HeroData = {
  title: {
    serif: string
    sans: string
  }
  subtitle: string
  ctas: {
    label: string
    href: string
    external?: boolean
  }[]
}

export const hero: HeroData = {
  title: {
    serif: 'Product Designer',
    sans: ' building scalable systems across high-traffic retail and conversational platforms',
  },
  subtitle:
    'I design at the intersection of clarity, behavior, and code. Turning complexity into experiences that feel effortless.',
  ctas: [
    {
      label: 'Selected work',
      href: '/#work',
    },
    {
      label: 'Resume',
      href: '/docs/Product-Designer_Armando-Rojano.pdf',
      external: true,
    },
  ],
}
