export type CapabilityItem = {
  id: string
  label: string
  description: string
}

export type StrengthsSection = {
  title: string
  intro: string
  items: CapabilityItem[]
}

export const strengthsSection: StrengthsSection = {
  title: 'Strengths & focus areas',
  intro:
    'Across retail, SaaS, and internal platforms, these are the strengths I lean on most. While working end-to-end from discovery to delivery.',
  items: [
    {
      id: 'systems',
      label: 'Systems',
      description: 'Lifecycle orchestration · exceptions & edge cases · service-state models',
    },
    {
      id: 'conversational',
      label: 'Conversational',
      description: 'Tone & voice · flow architecture · reusable message patterns',
    },
    {
      id: 'foundations',
      label: 'Foundations',
      description: 'Design system governance · component specs · documentation standards',
    },
    {
      id: 'delivery',
      label: 'Delivery',
      description: 'Design-to-dev alignment · implementation guidance · quality validation',
    },
  ],
}
