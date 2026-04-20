export type DesignPrinciple = {
  id: string
  title: string
  description: string
}

export type DesignPrinciplesData = {
  heading: string
  principles: DesignPrinciple[]
}

export const designPrinciples: DesignPrinciplesData = {
  heading: 'How I approach product design',
  principles: [
    {
      id: '01',
      title: 'Systems over screens',
      description:
        "I don't design isolated screens. I map how the pieces connect — flows, states, dependencies — before touching high-fidelity.",
    },
    {
      id: '02',
      title: 'Language as a design material',
      description:
        'Some of my most demanding work has no visual layer at all. Conversational products taught me that clarity of language is as critical as clarity of layout.',
    },
    {
      id: '03',
      title: 'Clarity over volume',
      description:
        "Less navigation, fewer steps, simpler language. Good design removes what doesn't need to be there, without losing what makes the experience feel considered.",
    },
    {
      id: '04',
      title: 'Constraints are inputs, not blockers',
      description:
        'Technical limitations, operational dependencies, and organizational resistance are all part of the design problem, not obstacles to the design solution.',
    },
  ],
}
