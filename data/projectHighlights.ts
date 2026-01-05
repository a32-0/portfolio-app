import { projects } from './projects'

export type ProjectHighlight = {
  product: string
  headline: string
  outcomes: string[]
  tags: string[]
}

const highlightMap: Record<string, ProjectHighlight> = {
  'invoice-liverpool': {
    product: "Liverpool's Invoicing",
    headline: 'Reducing friction in a high-traffic invoicing platform for retail customers',
    outcomes: [
      'Simplified a legally sensitive, post-purchase flow',
      'Reduced errors through clearer validations and states',
      'Enabled scalable changes via standardized components',
    ],
    tags: ['Enterprise', 'High-traffic', 'Billing', 'Web app', 'Post-purchase', 'B2C'],
  },
  'connect-liverpool': {
    product: "Liverpool's Internal Sales Tool",
    headline: 'Streamlining internal sales workflows for a call-center CRM',
    outcomes: [
      'Improved efficiency for high-volume phone sales',
      'Reduced operational friction across critical flows',
      'Designed scalable patterns for long-term evolution',
    ],
    tags: ['Enterprise', 'Internal tool', 'CRM', 'B2B', 'Sales platform'],
  },
  'whatsapp-liverpool': {
    product: "Liverpool's WhatsApp Bot",
    headline: 'Enabling self-service post-purchase operations through WhatsApp',
    outcomes: [
      'Reduced dependency on human agents',
      'Improved clarity in service, warranty, and order flows',
      'Designed reusable conversational patterns at scale',
    ],
    tags: ['Conversational UX', 'Messaging', 'High-traffic', 'B2C', 'Operations'],
  },
  'salesforce-liverpool': {
    product: 'Liverpool — Salesforce Modules',
    headline: 'Improving agent productivity through redesigned Salesforce modules',
    outcomes: [
      'Simplified complex internal workflows',
      'Increased consistency across tools and teams',
      'Aligned UX with Lightning Design System standards',
    ],
    tags: ['Enterprise', 'Internal tool', 'CRM', 'Salesforce', 'B2B'],
  },
  'ox-logistics': {
    product: 'OX Logistics',
    headline: 'Designing a logistics management platform for last-mile operations',
    outcomes: [
      'Clarified complex delivery and tracking flows',
      'Improved operational visibility for logistics teams',
      'Supported scalable growth through system thinking',
    ],
    tags: ['B2B', 'SaaS', 'Logistics', 'Web app', 'Operations'],
  },
  'ox-bi': {
    product: 'OX BI',
    headline: 'Building a lightweight CRM for small merchants and deliveries',
    outcomes: [
      'Enabled digital operations for non-technical users',
      'Simplified order and delivery management',
      'Designed a focused, task-driven CRM experience',
    ],
    tags: ['B2B', 'CRM', 'Small businesses', 'SaaS', 'Web app'],
  },
  immersio: {
    product: 'Immersio',
    headline: 'Designing immersive virtual reality experiences for enterprise clients',
    outcomes: [
      'Translated complex services into clear digital flows',
      'Designed experiences across 360° and VR formats',
      'Supported enterprise sales and client presentations',
    ],
    tags: ['B2B', 'Enterprise', 'VR', 'Service design', 'Web'],
  },
  'maestro-malta': {
    product: 'Maestro Malta',
    headline: 'Designing a consumer app for beer discovery and recommendations',
    outcomes: [
      'Simplified product discovery for non-expert users',
      'Improved onboarding and content clarity',
      'Designed engagement-focused mobile interactions',
    ],
    tags: ['Consumer', 'Mobile app', 'Content discovery', 'B2C'],
  },
  binca: {
    product: 'Binca',
    headline: 'Simplifying credit discovery for first-time fintech users',
    outcomes: [
      'Reduced cognitive load in financial onboarding',
      'Designed friendly flows for sensitive data',
      'Increased trust through clarity and transparency',
    ],
    tags: ['Fintech', 'B2C', 'Web app', 'Onboarding', 'Consumer-facing'],
  },
  toma1: {
    product: 'Toma1',
    headline: 'Designing a content streaming platform for independent cinema',
    outcomes: [
      'Improved content exploration and discovery',
      'Designed scalable patterns for media catalogs',
      'Balanced editorial content with usability',
    ],
    tags: ['Consumer', 'Streaming', 'Content platform', 'Web app'],
  },
  cyberpuerta: {
    product: 'Cyberpuerta — PC Builder Tool',
    headline: 'Improving confidence and clarity in PC configuration for e-commerce',
    outcomes: [
      'Reduced friction in complex product configuration',
      'Improved decision-making for non-expert users',
      'Aligned UX with technical constraints and inventory',
    ],
    tags: ['E-commerce', 'Web app', 'Configuration tool', 'B2C'],
  },
  mait: {
    product: 'Mait',
    headline: 'Helping travelers discover verified local experiences with confidence',
    outcomes: [
      'Framed booking flow around trust and transparency',
      'Elevated host profiles with clearer proof points',
      'Built modular cards to scale categories quickly',
    ],
    tags: ['Travel', 'Marketplace', 'Mobile & web', 'Discovery', 'B2C'],
  },
  doia: {
    product: 'Doia',
    headline: 'Personalized skincare guidance that turns into confident purchases',
    outcomes: [
      'Guided users through skin assessment with clearer steps',
      'Linked recommendations to routines and education',
      'Systematized UI for faster experimentation',
    ],
    tags: ['Ecommerce', 'Personalization', 'Mobile & web', 'B2C', 'Skincare'],
  },
  yuni: {
    product: 'Yuni',
    headline: 'Rental marketplace that keeps peer-to-peer transactions safe and simple',
    outcomes: [
      'Streamlined listing and rental requests with fewer drop-offs',
      'Clarified pricing, deposits, and logistics options',
      'Added trust cues across profiles and messaging',
    ],
    tags: ['C2C', 'Marketplace', 'Web app', 'Mobile', 'Trust & safety'],
  },
  nexum: {
    product: 'Nexum',
    headline: 'Website redesign focused on credibility and lead capture',
    outcomes: [
      'Clarified value proposition and services',
      'Improved information scent across sections',
      'Set a flexible system for iterative updates',
    ],
    tags: ['Website', 'B2B', 'Brand', 'Web'],
  },
  disrupto: {
    product: 'Disrupto',
    headline: 'Landing concepts showcasing disruptive ideas with clarity',
    outcomes: [
      'Framed messaging to surface the strongest proof points',
      'Used modular sections to adapt quickly',
      'Kept hierarchy clean for scan-friendly reading',
    ],
    tags: ['Landing page', 'Concepts', 'Brand', 'Web'],
  },
  ilum: {
    product: 'Ilum Prosperity Sherpas',
    headline: 'Website experience that balances credibility with clarity',
    outcomes: [
      'Organized services and proof into clear modules',
      'Refined copy and hierarchy for faster scanning',
      'Built a layout system that scales with content',
    ],
    tags: ['Website', 'B2B', 'Services', 'Web'],
  },
}

export function getProjectHighlight(slug: string): ProjectHighlight {
  const custom = highlightMap[slug]
  if (custom) return custom

  const project = projects.find((p) => p.slug === slug)
  const product = project ? `${project.title} — ${project.subtitle}` : slug
  const headline = project ? `${project.subtitle} for ${project.title}` : slug

  return {
    product,
    headline,
    outcomes: [
      'Improved clarity across the journey',
      'Aligned UI components for scalability',
      'Focused on measurable outcomes',
    ],
    tags: project?.year ? [project.subtitle, project.year] : [project?.subtitle ?? 'Case study'],
  }
}
