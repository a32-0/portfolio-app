export type CapabilityItem = {
  id: string
  label: string
  description: string
}

export type CapabilitiesSection = {
  title: string
  intro: string
  items: CapabilityItem[]
}

export const capabilitiesSection: CapabilitiesSection = {
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
