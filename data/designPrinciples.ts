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
  title: 'Design principles',
  intro:
    'I design with a systems mindset. Balancing user needs, operational constraints, and business outcomes.',
  principles: [
    {
      id: '01',
      title: 'Systems over screens',
      description:
        'I begin with the lifecycle, handoffs, and edge cases. Then shape UI around the system.',
    },
    {
      id: '02',
      title: 'Clarity over volume',
      description: 'I reduce cognitive load through hierarchy, language, and purposeful defaults.',
    },
    {
      id: '03',
      title: 'Business alignment over aesthetic trends',
      description:
        'I optimize for measurable outcomes, operational efficiency, and long-term maintainability.',
    },
    {
      id: '04',
      title: 'Reusable foundations over one-off solutions',
      description:
        'I build patterns and standards that help teams move faster with fewer regressions.',
    },
    {
      id: '05',
      title: 'Constraints are inputs, not blockers',
      description:
        'I collaborate early with engineering and ops to design for feasibility and delivery.',
    },
  ],
}
