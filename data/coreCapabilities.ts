export type CoreCapabilityItem = {
  id: string
  title: string
}

export type CoreCapabilitiesSection = {
  title: string
  items: CoreCapabilityItem[]
}

export const coreCapabilitiesSection: CoreCapabilitiesSection = {
  title: 'Core capabilities in complex environments',
  items: [
    {
      id: 'service-lifecycle-modeling',
      title: 'Service lifecycle modeling',
    },
    {
      id: 'workflow-optimization',
      title: 'Workflow optimization',
    },
    {
      id: 'conversational-architecture',
      title: 'Conversational architecture',
    },
    {
      id: 'design-system-governance',
      title: 'Design system governance',
    },
    {
      id: 'design-to-development-alignment',
      title: 'Design-to-development alignment',
    },
    {
      id: 'documentation-standards',
      title: 'Documentation standards for scalability',
    },
  ],
}
