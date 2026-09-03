import type { CaseStudy } from './types'

export const whatsappLiverpool: CaseStudy = {
  slug: 'whatsapp-liverpool',
  title: "Designing for the Customer, Not the Operation: Rethinking Liverpool's WhatsApp Channel",
  subtitle:
    'A channel built by operations, for operations. What happened when a designer started asking the right questions inside it.',
  overview:
    "Liverpool's WhatsApp channel handles over 30,000 customer sessions a day, one of the most trafficked digital touchpoints in Mexican retail. When I joined the team, the channel had been built by operations, for operations. It served internal workflows, not the person on the other end of the conversation. This case study isn't about one project. It's about what happens when a designer starts asking the right questions inside a system that wasn't built to welcome them.",
  metrics: [
    { value: '30,103', label: 'Daily sessions', delta: 'Average' },
    { value: '77%', label: 'Containment rate', delta: 'Resolved without live agent' },
    { value: '0.0%', label: 'Abandonment rate', delta: 'Target: 0.5%' },
    { value: '90.4%', label: 'First contact resolution', delta: '9 in 10 without follow-up' },
  ],
  sections: [
    {
      id: 'context',
      label: 'Context',
      title: 'A channel built for the wrong person',
      image: '/images/projects/whatsapp-liverpool/case-1.png',
      body: [
        "El Puerto de Liverpool is one of Mexico's largest retailers, with a sizable digital commerce operation and a growing base of store credit card holders. WhatsApp has become the main support channel: where customers go when there's a problem with an order, a question about their credit account, or they just need to reach a human.",
        "The channel had self-service options for order tracking, credit account info, invoicing, and FAQs. But most of these had been designed by the operations team to reduce load on live agents, not to help customers actually solve their problem. That distinction matters more than it sounds. When someone reaches out about an order, their job isn't to navigate a menu. It's to fix the problem, fast. The channel, as it stood, was built for the first thing.",
      ],
      subsections: [
        {
          title: 'What the data said',
          body: [
            'The most-visited flows were order tracking and credit information, both high-intent, problem-driven. But NO_MATCH was the single most common entry and exit intent: nearly 29K sessions came in without a recognized intent, and over 37K left the same way.',
            "That wasn't a technical gap. It meant the channel's language and the customer's language weren't speaking to each other.",
          ],
        },
      ],
    },
    {
      id: 'origin',
      label: 'How I got here',
      title: 'From copywriter to cell member',
      body: [
        "I didn't start as a product designer on this channel. The Customer Experience team asked me to review their messages, closer to content editing than UX design. A narrow ask with what looked like limited scope.",
        "I could have just done what was asked. Instead I started reading the flows as a designer would. The more I read, the more I noticed: messages with no structure, flows built around operational logic, friction that gave the user nothing back. I started flagging patterns instead of just fixing copy.",
        "The CX team leaned into it. We started working like a product cell before we officially were one: running our own sprints, writing our own user stories, holding ceremonies with no Scrum Master. Two sprints in, a director saw what was happening and made it official. I stayed because I'd found something genuinely interesting: designing without a traditional interface, using language itself as the material.",
      ],
    },
    {
      id: 'tension',
      label: 'Core tension',
      title: 'User-first vs. operation-first',
      image: '/images/projects/whatsapp-liverpool/case-2.png',
      body: [
        "The most important design problem on this channel had nothing to do with visuals.",
        "Every flow I inherited ran on the same logic: make it easier for the operation. Reduce agent load, cut handling time, sort customer queries into predictable buckets. Reasonable goals on their own, except they'd become the only goals. What the customer actually experienced was an afterthought at best.",
        "It clicked for me while redesigning a flow for logistics complaints. The business requirement was basically a multi-step form before a customer could even reach an agent. For someone whose package hasn't shown up, this isn't a form-filling moment. It's urgent and it's emotional. The form was built to help operations categorize complaints. It did nothing to help the customer feel heard.",
        "Once I saw it there, I started spotting the same pattern everywhere, and I brought it to my product owner and team lead. Not framed as \"this is wrong,\" but as \"here's what the customer is actually trying to do, and here's how the current design gets in the way.\" JTBD gave me a clean way to make that case.",
      ],
      subsections: [
        {
          title: 'A specific battle: the authentication debate',
          body: [
            'One of the more contentious discussions I got pulled into was about authentication for unidentified customers. The operations team wanted to drop a security code step, arguing it created friction for agents and customers alike.',
            "My position was that this call didn't belong to operations. Liverpool has a security team whose job is exactly this kind of decision. What operations wanted was shaped by their own operational pain, not a real risk assessment. Pushing the decision to the right stakeholder wasn't me blocking things. It was just how product decisions should work.",
          ],
        },
        {
          title: 'A missed opportunity: contextual help buttons',
          body: [
            'The app\'s order detail and credit movement views had contextual buttons: "Help with my order" and "Help with my unrecognized charge." Both opened a generic WhatsApp greeting with no context carried over.',
            "My proposal was simple: if the button lives on the order detail screen, the system already knows the order, the customer, and their situation. Pass that into the conversation. The pushback was real: it would need coordination across several product cells, and the timeline didn't allow for it. The idea got shelved. I bring it up not as a failure but as an example of thinking that outran what the org could actually pull off at the time.",
          ],
        },
      ],
    },
    {
      id: 'work',
      label: 'The work',
      title: 'Designing conversations at scale',
      image: '/images/projects/whatsapp-liverpool/case-3.png',
      body: [
        'Over five sprints and several epics, the cell redesigned and automated flows that used to need a live agent. This was continuous improvement, not a big-bang redesign, so every decision had to hold up against sprint priorities, business constraints, and technical dependencies.',
      ],
      subsections: [
        {
          title: 'How I approach conversational design',
          body: [
            "Without a visual interface, language is the design material, and it's a lot harder to prototype than a screen.",
          ],
          items: [
            'Start with the functional brief, then separate the business requirement from the actual user need. They rarely match.',
            'Map the conversation at a high level before jumping to fidelity. Diagramming saves time and catches edge cases while they\'re still cheap to fix.',
            "Use JTBD as a lens: what is this person actually trying to get done right now, and what would make this moment feel resolved?",
            'Validate with Maze for structured testing, and keep talking to agents, who see exactly where customers get stuck.',
            'Match research depth to impact. Not every flow needs a full research cycle, but skipping it should be a decision, not a default.',
          ],
        },
        {
          title: 'Constraints I worked within honestly',
          body: [
            "The channel had no dedicated analytics setup. Quantum Metric covered the broader e-commerce ecosystem, but WhatsApp ran separately, which made it hard to measure the impact of individual flow changes with any precision.",
            "I also made tradeoffs on my own process. The channel's design system, message pattern library, and conversational guidelines all exist, but none are as complete as I'd like. In a continuous-improvement environment with tight sprints, some craft debt builds up.",
          ],
        },
      ],
    },
    {
      id: 'ai',
      label: 'Conversational AI',
      title: 'The next layer: conversational AI with Google',
      image: '/images/projects/whatsapp-liverpool/case-4.png',
      body: [
        'While the cell kept iterating on the existing flow-based setup, Liverpool started exploring something bigger: replacing the rule-based chatbot with a Gemini-powered conversational agent. Google brought the technology. I was the only designer in the room.',
        "My contribution to the proof of concept included a content guide defining the agent's voice, tone, and response principles; prompt design shaping how the agent behaved across different intents and emotional states; scenario-based message examples for the most critical flows (order issues, credit inquiries, escalation paths); and UX recommendations on conversation structure, fallback handling, and the handoff between automated and live agent experiences.",
      ],
    },
    {
      id: 'impact',
      label: 'Impact',
      title: 'Impact',
      body: [
        "Measuring design impact in a continuous-improvement environment, without a dedicated analytics stack, means being honest about what can and can't actually be attributed to the work.",
      ],
      subsections: [
        {
          title: 'Channel metrics, April 2026',
          body: [
            'The channel metrics from April 2026 tell a consistent story about what happens when conversational design gets treated seriously:',
          ],
          items: [
            '77% containment rate. 3 in 4 sessions resolved without a live agent.',
            '90.3% first response rate against a 90% target, meeting the responsiveness commitment.',
            "0.0% abandonment rate against a 0.5% target. Effectively no customers leaving before getting a response, which is the clearest sign the flows are actually holding people rather than losing them.",
            '90.4% first contact resolution. 9 in 10 interactions resolved without a follow-up.',
            'Average resolution time of 2:04 minutes, fast enough to match or beat live agent handling time in many cases.',
          ],
        },
        {
          title: 'What the numbers reflect',
          body: [
            "The 0.0% abandonment rate is the one that means the most to me. Nobody was tracking or optimizing it before this team existed. Getting it to essentially zero is a direct result of flows that don't push people to give up.",
            "For the first time, the channel's messages and interaction patterns were shaped by a designer, with real attention to clarity, cognitive load, and tone. The operations team's read on customer experience has genuinely shifted. Bringing in JTBD as a frame, documenting patterns, and running ongoing design reviews all fed into a broader understanding that designing for the user and designing for the operation aren't the same thing.",
            "The cell itself got formalized because of the work that came before it existed. That's an organizational result, not just a design one.",
          ],
        },
      ],
    },
    {
      id: 'next',
      label: 'What comes next',
      title: 'What comes next',
      body: [
        "The Gemini migration changes the design problem at its root. Flow-based thinking gives way to intent-based thinking: what is the customer trying to get done, and how does the agent get them there no matter how they phrase it? The work ahead for the cell is carrying the principles from this project into a setup where the interaction model is no longer deterministic. It's a harder problem. It's also a more interesting one.",
        "Liverpool's WhatsApp channel is also positioned to become more than a support line, reaching customers proactively at key moments: installation updates, warranty reminders, order milestones. Designing for that means treating the channel less like a helpdesk and more like an ongoing relationship.",
      ],
    },
  ],
  footnote:
    'Metrics sourced from internal Looker Studio dashboards and Liverpool contact center KPI reports (April 2026). Channel performance data reflects the full WhatsApp operation across all use cases.',
}
