import { projects } from './projects'

export type SelectedWorkHighlight = {
  cardCategory: string
  cardTitle: string
  cardTags: string[]
}

const selectedWorkHighlightsMap: Record<string, SelectedWorkHighlight> = {
  'invoice-liverpool': {
    cardCategory: 'Invoicing Platform',
    cardTitle:
      'Redesigning a mission-critical invoicing journey used by 184K+ monthly users — reducing average session time from 35 minutes to under 3 minutes.',
    cardTags: ['UX Research', 'Interaction Design', 'UX Writing'],
  },
  'connect-liverpool': {
    cardCategory: 'Contact Center Sales Platform',
    cardTitle:
      "Designing Liverpool's next-generation sales tool for 40+ agents processing millions in daily revenue — from an undefined brief to a validated, production-ready system.",
    cardTags: ['Systems Design', 'Enterprise UX', 'Stakeholder Research'],
  },
  'whatsapp-liverpool': {
    cardCategory: 'WhatsApp Business Platform',
    cardTitle:
      'Transforming an agent-assisted support channel into a scalable self-service product serving ~29K daily users — designed entirely without a traditional interface.',
    cardTags: ['Conversational UX', 'Product Design', 'UX Research'],
  },
}

export function getSelectedWorkHighlight(slug: string): SelectedWorkHighlight {
  const custom = selectedWorkHighlightsMap[slug]
  if (custom) return custom

  const project = projects.find((p) => p.slug === slug)
  const title = project?.title ?? slug

  return {
    cardCategory: 'Selected project',
    cardTitle: title,
    cardTags: [],
  }
}
