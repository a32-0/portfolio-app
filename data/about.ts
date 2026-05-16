export type InlineLink = {
  text: string
  href: string
}

export type Paragraph = string | (string | InlineLink)[]

export type AboutSection = {
  eyebrow: string
  body: Paragraph[]
}

export const aboutSection: AboutSection = {
  eyebrow: 'About',
  body: [
    "I'm Armando, a Product Designer based in Mexico.",
    'I ask a lot of questions before opening Figma. Especially when the problem sits where users, operations, and technology pull in different directions.',
    [
      "That's the kind of work I've been doing at ",
      { text: 'Liverpool', href: 'https://www.linkedin.com/company/elpuertodeliverpool' },
      ', designing their billing portal, a sales tool for call center agents, and a WhatsApp customer service channel where language is the primary design material. Before that, at ',
      { text: 'Ilum', href: 'https://www.linkedin.com/company/ilum-prosperity-sherpas/' },
      ', I shipped across fintech, logistics SaaS, healthtech, and consumer apps.',
    ],
    'What drives me is the distance between how hard something is to build and how effortless it should feel to use. In a past life I wrote code — and it shows.',
  ],
}
