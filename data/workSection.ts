export type WorkSectionData = {
  id: string
  title: string
  projectHrefBase: string
  projectSlugs: string[]
}

export const workSection: WorkSectionData = {
  id: 'work',
  title: 'Selected work',
  projectHrefBase: '/work',
  projectSlugs: [
    'whatsapp-liverpool',
    'invoice-liverpool',
    'connect-liverpool',
    'salesforce-liverpool',
  ],
}
