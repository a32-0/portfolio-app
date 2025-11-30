export type ExperienceData = {
  id: string
  role: string
  company: string
  description: string
  period: string
  current?: boolean
}

export const experience: ExperienceData[] = [
  {
    id: 'liverpool',
    role: 'UX Designer',
    company: 'El Puerto de Liverpool',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    period: 'Since February 2025',
    current: true,
  },
  {
    id: 'catarsis',
    role: 'UX Designer',
    company: 'Catarsis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    period: 'Since July 2023',
  },
  {
    id: 'ilum',
    role: 'UX/UI Designer, UX Researcher, and UX Engineer',
    company: 'Ilum Prosperity Sherpas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    period: '3 yrs 6 mos (Aug 2021 — Jan 2025)',
  },
  {
    id: 'freelance',
    role: 'Graphic Designer',
    company: 'Freelance',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    period: '2 yrs 6 mos (Aug 2018 — Jan 2021)',
  },
]
