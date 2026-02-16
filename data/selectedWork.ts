export type SelectedWorkData = {
  id: string
  title: string
  projectHrefBase: string
  projectSlugs: string[]
}

export const selectedWork: SelectedWorkData = {
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
