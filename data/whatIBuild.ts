export type WhatIBuildItem = {
  id: string
  title: string
  description: string
}

export type WhatIBuildSection = {
  title: string
  intro: string
  items: WhatIBuildItem[]
}

export const whatIBuildSection: WhatIBuildSection = {
  title: 'What I build',
  intro:
    'I design in environments where operational complexity, business constraints, and user experience intersect.',
  items: [
    {
      id: 'conversational-products',
      title: 'Conversational products',
      description:
        'Self-service architectures that reduce manual agent dependency and structure service orchestration inside chat ecosystems.',
    },
    {
      id: 'high-traffic-customer-flows',
      title: 'High-traffic customer flows',
      description:
        'End-to-end journeys used by 100k+ monthly users, designed to reduce friction, errors, and operational cost.',
    },
    {
      id: 'operational-systems',
      title: 'Operational systems',
      description:
        'Revenue-critical internal platforms, lifecycle modeling, and workflow optimization for large-scale teams.',
    },
  ],
}
