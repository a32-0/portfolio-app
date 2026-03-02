export type CertificatesData = {
  id: string
  title: string
}

export type CertificatesSection = {
  title: string
  intro: string
  items: CertificatesData[]
}

export const certificatesSection: CertificatesSection = {
  title: 'Core capabilities in complex environments',
  intro: '',
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
