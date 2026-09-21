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
    "I'm Armando.",
    'I help teams turn operational complexity into interfaces that don\'t feel complicated, without hiding what it takes to run them. Based in Mexico City, working with distributed teams.',
    [
      "That's the kind of work I've been doing at ",
      { text: 'Liverpool', href: 'https://www.linkedin.com/company/elpuertodeliverpool' },
      ', designing their billing portal, a sales tool for call center agents, and a WhatsApp customer service channel where language is the primary design material. Before that, at ',
      { text: 'Ilum', href: 'https://www.linkedin.com/company/ilum-prosperity-sherpas/' },
      ', I shipped across fintech, logistics SaaS, healthtech, and consumer apps.',
    ],
    'What drives me is the gap between how hard something is to build and how simple it should feel to use. I used to write code, and it still shapes how I design.',
  ],
}
