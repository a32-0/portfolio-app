export type CapabilityItem = {
  id: string
  label: string
  description: string
}

export type TechnologySection = {
  title: string
  intro: string
  items: CapabilityItem[]
}

export const technologySection: TechnologySection = {
  title: 'Capabilities',
  intro: '',
  items: [
    {
      id: 'systems',
      label: 'Systems',
      description: 'Lifecycle orchestration, exception handling, service-state frameworks.',
    },
    {
      id: 'conversational',
      label: 'Conversational',
      description: 'Tone & voice systems, flow architecture, reusable message patterns.',
    },
    {
      id: 'foundations',
      label: 'Foundations',
      description: 'Design system governance, component specs, documentation standards.',
    },
    {
      id: 'delivery',
      label: 'Delivery',
      description: 'Design-to-dev alignment, implementation guidance, quality validation.',
    },
  ],
}
