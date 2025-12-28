export type CertificatesData = {
  id: string
  logo: string
  issuer: string
  title: string
  date: string
  href: string
}

export type CertificatesSection = {
  title: string
  intro: string
  items: CertificatesData[]
}

export const certificatesSection: CertificatesSection = {
  title: 'Continuous learning in practice',
  intro:
    'Certifications that keep me sharp and grounded in both design craft and the systems that ship it.',
  items: [
    {
      id: 'certificate-meta',
      logo: '/icons/mingcute_meta-fill.svg',
      issuer: 'Meta',
      title: 'Front-End Developer',
      date: 'Issued Dec 2024',
      href: 'https://www.coursera.org/account/accomplishments/specialization/PP36AF1CLIQL',
    },
    {
      id: 'certificate-google',
      logo: '/icons/ri_google-fill.svg',
      issuer: 'Google',
      title: 'UX Design',
      date: 'Issued May 2024',
      href: 'https://www.coursera.org/account/accomplishments/specialization/9ZF83F88L79P',
    },
    {
      id: 'certificate-design-thinking',
      logo: '/icons/certiprof.svg',
      issuer: 'CertiProf',
      title: 'Design Thinking',
      date: 'Issued Feb 2024',
      href: 'https://www.credly.com/badges/c45179d7-b68f-4841-90ec-2e69fd456ff3/public_url',
    },
    {
      id: 'certificate-scrum',
      logo: '/icons/certiprof.svg',
      issuer: 'CertiProf',
      title: 'Scrum Foundation',
      date: 'Issued Aug 2023',
      href: 'https://www.credly.com/badges/def86223-ec15-4b8b-9fb8-c6908ce22fc8/public_url',
    },
  ],
}
