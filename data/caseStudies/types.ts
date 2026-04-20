export type CaseStudyMetric = {
  value: string
  label: string
  delta?: string
}

export type CaseStudySubsection = {
  title: string
  body: string[]
  items?: string[]
}

export type CaseStudySection = {
  id: string
  label: string
  title: string
  body?: string[]
  image?: string
  subsections?: CaseStudySubsection[]
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  client: string
  period: string
  disciplines: string[]
  overview: string
  metrics: CaseStudyMetric[]
  sections: CaseStudySection[]
  footnote?: string
}
