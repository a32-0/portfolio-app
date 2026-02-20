export type CertificatesData = {
  id: string
  title: string
  href?: string
  ongoing?: boolean
}

export type CertificatesSection = {
  title: string
  intro: string
  items: CertificatesData[]
}

export const certificatesSection: CertificatesSection = {
  title: 'Continuous learning',
  intro: '',
  items: [
    {
      id: 'certificate-meta',
      title: 'Meta Front-End Developer Specialization',
      href: 'https://www.coursera.org/account/accomplishments/specialization/PP36AF1CLIQL',
    },
    {
      id: 'certificate-google',
      title: 'Google UX Design Certificate',
      href: 'https://www.coursera.org/account/accomplishments/specialization/9ZF83F88L79P',
    },
    {
      id: 'certificate-design-thinking',
      title: 'Design Thinking Certification',
      href: 'https://www.credly.com/badges/c45179d7-b68f-4841-90ec-2e69fd456ff3/public_url',
    },
    {
      id: 'certificate-scrum',
      title: 'Scrum Professional Certification',
      href: 'https://www.credly.com/badges/def86223-ec15-4b8b-9fb8-c6908ce22fc8/public_url',
    },
    {
      id: 'certificate-ongoing-hci',
      title: 'Ongoing: Perception and Memory in HCI and UX...',
      ongoing: true,
    },
  ],
}
