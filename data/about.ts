export type AboutPrinciple = {
  id: string
  title: string
  description: string
}

export type AboutData = {
  title: string
  intro: string
  principles: AboutPrinciple[]
}

export const about: AboutData = {
  title: 'What defines my work',
  intro:
    'I believe great design goes beyond aesthetics. It connects people with clarity, purpose, and meaning. These are the principles that shape how I work and what I bring to every project.',
  principles: [
    {
      id: '01',
      title: 'High standards & attention to detail',
      description:
        'I care deeply about clarity, quality, and precision. Every interface, flow, and system I design is guided by consistency, usability, and a high personal standard. I refine the details, structure information thoughtfully, and create scalable solutions that elevate both the user experience and the product.',
    },
    {
      id: '02',
      title: 'Design grounded in research & technical thinking',
      description:
        'I design with intention. My work is informed by user insights, data, and a strong understanding of front-end constraints. Whether improving workflows, reducing errors, or simplifying complex tasks, I aim for solutions that are intuitive, efficient, and measurable in impact.',
    },
    {
      id: '03',
      title: 'Collaboration at the core',
      description:
        'Great products are built by great teams. I thrive in cross-functional environments-working closely with developers, PMs, CX teams, analysts, and stakeholders. Clear communication, alignment, and shared ownership are central to my process, ensuring every project moves forward with purpose.',
    },
    {
      id: '04',
      title: 'Continuous learning & growth',
      description:
        "I'm driven by curiosity and disciplined self-improvement. I constantly explore new tools, methods, and technologies to expand my craft and stay ahead in a fast-changing industry. Learning fuels my creativity and helps me bring fresh thinking to every challenge.",
    },
  ],
}
