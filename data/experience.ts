export type ExperienceData = {
  id: string
  role: string
  company: string
  description: string
  period: string
  current?: boolean
}

export type ExperienceSection = {
  title: string
  intro: string
  resumeCta: {
    label: string
    href: string
  }
  items: ExperienceData[]
}

export const experienceSection: ExperienceSection = {
  title: "Where I've been building",
  intro:
    'A quick snapshot of the teams and products that have shaped how I design, ship, and collaborate.',
  resumeCta: {
    label: 'View full resume ↗',
    href: '/docs/UX-Designer_Armando-Rojano.pdf',
  },
  items: [
    {
      id: 'liverpool',
      role: 'UX Designer',
      company: 'El Puerto de Liverpool',
      description:
        'Design and improve high-impact customer and internal experiences at scale, optimizing critical flows across web, WhatsApp, and Salesforce used nationwide.',
      period: 'Since February 2025',
      current: true,
    },
    {
      id: 'catarsis',
      role: 'UX Designer',
      company: 'Catarsis',
      description:
        'Deliver end-to-end UX for clients, translating research and business needs into clear, validated designs and production-ready handoffs in close collaboration with stakeholders.',
      period: 'Since July 2023',
    },
    {
      id: 'ilum',
      role: 'UX/UI Designer, UX Researcher, and UX Engineer',
      company: 'Ilum Prosperity Sherpas',
      description:
        'Bridged UX design, research, and engineering to deliver scalable, high-quality digital products-driving measurable gains in usability, development efficiency, and cross-functional collaboration from concept to production.',
      period: '3 yrs 6 mos (Aug 2021 - Jan 2025)',
    },
    {
      id: 'freelance',
      role: 'Graphic Designer',
      company: 'Freelance',
      description:
        'Created brand identities and digital visual assets for clients, translating business needs into clear, consistent, and effective visual communication across print and digital channels.',
      period: '2 yrs 6 mos (Aug 2018 - Jan 2021)',
    },
  ],
}
