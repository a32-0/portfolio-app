import type { CaseStudy } from './types'

export const whatsappLiverpool: CaseStudy = {
  slug: 'whatsapp-liverpool',
  title: "Designing for the Customer, Not the Operation: Rethinking Liverpool's WhatsApp Channel",
  subtitle:
    'A channel built by operations, for operations. What happened when a designer started asking the right questions inside it.',
  overview:
    "Liverpool's WhatsApp channel handles over 30,000 customer sessions per day, making it one of the most trafficked digital touchpoints in Mexico's retail landscape. When I joined the team, the channel had been built by operations — for operations. The design served internal workflows, not the people on the other end of the conversation. This case study is not about a single project. It's about what happens when a designer starts asking the right questions inside a system that wasn't designed to welcome them.",
  metrics: [
    { value: '30,103', label: 'Daily sessions', delta: 'Average' },
    { value: '77%', label: 'Containment rate', delta: 'Resolved without live agent' },
    { value: '86%', label: 'Query success rate', delta: 'Virtual agent' },
    { value: '2:04', label: 'Avg. resolution time', delta: 'Min:sec — virtual agent' },
  ],
  sections: [
    {
      id: 'context',
      label: 'Context',
      title: 'A Channel Built for the Wrong Person',
      image: 'placeholder',
      body: [
        "El Puerto de Liverpool is one of Mexico's largest retailers, with a significant digital commerce operation and a growing base of departmental credit card holders. WhatsApp has become the primary digital support channel — the place where customers go when they have a problem with an order, a question about their credit account, or need to reach a human.",
        'The channel offered a range of self-service capabilities: order tracking, credit account information, invoicing, and FAQs. But most of these flows had been designed by the operations team to reduce load on live agents — not to help customers resolve their actual problems. The distinction matters more than it might seem. When a customer searches for help with an order, their job-to-be-done is not "navigate a menu structure." It\'s "fix my problem, quickly."',
      ],
      subsections: [
        {
          title: 'What the data said',
          body: [
            'The most-visited flows were Mis Compras (order tracking) and Mi Crédito (credit information) — both high-intent, problem-driven use cases. Yet NO_MATCH was both the most frequent entry intent and the most frequent exit intent, with nearly 29K sessions entering without a recognized intent and over 37K exiting the same way.',
            "This wasn't just a technical gap. It was a signal that the channel's language and the customer's language weren't aligned.",
          ],
        },
      ],
    },
    {
      id: 'origin',
      label: 'How I Got Here',
      title: 'From Copywriter to Cell Member',
      body: [
        "I didn't start as a product designer on this channel. I was asked by the Customer Experience team to review their messages — something closer to content editing than UX design. A narrow ask, with what seemed like limited scope.",
        'I could have done exactly what was asked. Instead, I started reading the flows as a designer. The more I read, the more I saw: messages written without structure, flows built around operational logic, interactions that created friction for no user benefit. I started flagging patterns, not just fixing copy.',
        'The CX team leaned into it. We started working like a product cell before we were one — running our own sprints, writing our own user stories, holding ceremonies without a Scrum Master. Two sprints in, a director recognized the value of what was happening and formalized the structure. I stayed because I had found something genuinely interesting: designing without a traditional interface, using language as the primary design material.',
      ],
    },
    {
      id: 'tension',
      label: 'Core Tension',
      title: 'User-First vs. Operation-First',
      image: 'placeholder',
      body: [
        "The most important design problem on this channel wasn't visual. It was ideological.",
        "Every flow I inherited had been built with the same underlying logic: make it easier for the operation. Reduce agent load, minimize handling time, filter customer queries into predictable buckets. These are legitimate goals — but they had become the only goals. The customer's actual experience was a secondary consideration at best.",
        "The moment this crystallized for me was while redesigning a flow for customers to report a logistics complaint. The business requirement was essentially a multi-step form — name, order number, type of issue, description — before a customer could even connect with an agent. For a customer whose package hasn't arrived, this is not a form-filling moment. It's an urgent, emotional moment. The form was designed to help the operations team categorize complaints. It was not designed to help the customer feel heard.",
      ],
      subsections: [
        {
          title: 'A specific battle: the authentication debate',
          body: [
            'One of the more contentious discussions I navigated was around authentication for unidentified customers. The operations team wanted to remove a security code step — the reasoning being that it created friction for agents and customers alike.',
            "My position was that this decision didn't belong to the operations team. Liverpool has a designated security authority responsible for exactly these calls. The operations team's instinct was shaped by their own operational pain, not by a security risk assessment. Pushing the decision to the right stakeholder wasn't obstruction — it was product hygiene.",
          ],
        },
        {
          title: 'A missed opportunity: contextual help buttons',
          body: [
            'Within the app\'s order detail and credit movement views, there were contextual buttons — "Help with my order" and "Help with my unrecognized charge." Both launched a generic WhatsApp greeting with no context passed through.',
            "My proposal was straightforward: if the button already lives in the order detail view, the system already knows which order, which customer, and what state they're in. Pass that context into the conversation. When the customer arrives in WhatsApp, an agent would have everything they need — no form, no re-identification, no repeated questions.",
            "The resistance was real: this would require coordination across multiple product cells, and the timeline didn't allow for it. The idea was shelved. I document it here not as a failure, but as an example of how systemic thinking sometimes runs ahead of organizational bandwidth.",
          ],
        },
      ],
    },
    {
      id: 'work',
      label: 'The Work',
      title: 'Designing Conversations at Scale',
      image: 'placeholder',
      body: [
        'Over five sprints and multiple epics, the cell redesigned and automated flows that previously required live agent intervention. The work was continuous improvement, not big-bang redesign — which meant each decision had to be justified against sprint priorities, business constraints, and technical dependencies.',
      ],
      subsections: [
        {
          title: 'How I approach conversational design',
          body: [
            'Without a visual interface, the design material is language — and language is harder to prototype than screens.',
          ],
          items: [
            'Start with the functional brief, then immediately separate the business requirement from the user need. They are rarely the same thing.',
            'Map the conversation at a high level before going to high fidelity. Diagramming saves time and surfaces edge cases before they become expensive.',
            'Use JTBD as an analytical lens — not as a rigid methodology, but as a way of asking "what is this person actually trying to accomplish right now?"',
            'Validate with Maze for structured testing. Maintain ongoing dialogue with agents, who have unfiltered insight into where customers get stuck.',
            'Calibrate research depth to impact. Not every flow warrants a full research cycle — but the decision to skip research should be explicit, not default.',
          ],
        },
        {
          title: 'Constraints I worked within honestly',
          body: [
            "The channel lacked a dedicated analytics setup — Quantum Metric covered the broader e-commerce ecosystem, but WhatsApp operated with a separate measurement stack that wasn't consistently monitored. This made it difficult to measure the impact of specific flow changes with precision.",
            "The design system for the channel, the message pattern library, the conversational guidelines — all of these exist in early form, but none are as complete as I'd want them to be. In a continuous-improvement environment with tight sprint cycles, some craft debt accumulates. I've been deliberate about identifying it, even when I couldn't address it immediately.",
          ],
        },
      ],
    },
    {
      id: 'ai',
      label: 'Conversational AI',
      title: 'The Next Layer: Conversational AI with Google',
      image: 'placeholder',
      body: [
        'While the cell was iterating on the existing flow-based architecture, Liverpool began exploring a larger shift: replacing the rule-based chatbot with a Gemini-powered conversational agent. Google brought the technology. I was the only designer in the room.',
        "The proof-of-concept work I contributed included a content guide defining the agent's voice, tone, and response principles; prompt design to shape the agent's behavior across different customer intents and emotional states; scenario-based message examples covering the most critical flows; and UX recommendations on conversation structure, fallback handling, and the transition between automated and live agent experiences.",
        "The outcome is still in progress. What's clear is the direction: the channel is moving from structured menus to open conversation. Everything we've built in terms of flow logic, content patterns, and user understanding becomes the foundation for what gets layered on top.",
      ],
    },
    {
      id: 'impact',
      label: 'Impact',
      title: 'Impact',
      body: [
        "Measuring the impact of design work in a continuous-improvement environment — without a dedicated analytics stack — requires honesty about what can and can't be attributed.",
        'Flows that previously terminated in live agent transfers were redesigned as self-service experiences. The 77% containment rate reflects a channel where the large majority of customer needs are resolved without human intervention.',
        "For the first time, the channel's messages and interaction patterns were designed by a designer — with attention to language clarity, cognitive load, and emotional tone. The operations team's perspective on customer experience has measurably shifted. The introduction of JTBD as a design frame, the pattern documentation, and the ongoing design reviews have contributed to a broader awareness that designing for the user and designing for the operation are not the same goal.",
        "The cell itself was formalized as a direct result of the work that preceded its existence. That's an organizational outcome, not just a design one.",
      ],
    },
    {
      id: 'next',
      label: 'What Comes Next',
      title: 'What Comes Next',
      body: [
        "The Gemini migration changes the design problem fundamentally. Flow-based thinking — if the customer says X, show Y — gives way to intent-based thinking: what is the customer trying to accomplish, and how does the agent help them get there regardless of how they phrase it? That's a harder design problem. It's also a more interesting one.",
        "Liverpool's WhatsApp channel is also positioned to become a proactive communication layer — not just a support destination, but a channel that reaches customers at key moments in their service journey: installation updates, warranty reminders, order milestones. Designing those touchpoints means thinking about the channel less as a helpdesk and more as a relationship surface.",
      ],
    },
  ],
  footnote:
    'Metrics sourced from internal Looker Studio dashboards (Mar 2026). Some figures reflect aggregated channel data across all use cases.',
}
