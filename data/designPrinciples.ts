export type DesignPrinciple = {
  id: string
  title: string
  description: string
}

export type DesignPrinciplesData = {
  title: string
  intro: string
  principles: DesignPrinciple[]
}

export const designPrinciples: DesignPrinciplesData = {
  title: 'How I structure complex systems',
  intro:
    'My approach prioritizes systems thinking over isolated screens.',
  principles: [
    {
      id: '01',
      title: 'Lifecycle before interface',
      description:
        'I model service states, transitions, and exceptions before designing interfaces.',
    },
    {
      id: '02',
      title: 'Operational alignment before visual decisions',
      description:
        'I collaborate early with engineering and operations to design within real constraints.',
    },
    {
      id: '03',
      title: 'Reusable patterns over isolated features',
      description: 'I build scalable foundations to reduce regressions and improve long-term velocity.',
    },
    {
      id: '04',
      title: 'Edge cases as a default discipline',
      description: 'I design for failure states, not just ideal scenarios.',
    },
  ],
}
