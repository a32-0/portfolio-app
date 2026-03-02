export type HeroData = {
  title: string
  subtitle: string
  ctas: {
    label: string
    href: string
    external?: boolean
  }[]
}

export const hero: HeroData = {
  title: 'Designing operational systems that scale across retail, service, and conversational ecosystems',
  subtitle:
    'I structure complex service operations into measurable, reusable, and scalable product experiences, supporting 180k+ monthly users, 40+ operational agents, and revenue-critical workflows.',
  ctas: [
    {
      label: 'View selected work',
      href: '/#work',
    },
    {
      label: 'Download resume',
      href: '/docs/Product-Designer_Armando-Rojano.pdf',
      external: true,
    },
  ],
}
