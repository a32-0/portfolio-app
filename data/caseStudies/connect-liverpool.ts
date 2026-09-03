import type { CaseStudy } from './types'

export const connectLiverpool: CaseStudy = {
  slug: 'connect-liverpool',
  title: 'Designing Connect: A Sales System for 40+ Contact Center Agents',
  subtitle:
    'Inheriting an undefined project, designing a system from scratch, and arguing for scope decisions nobody had mapped.',
  overview:
    "Connect is Liverpool's primary sales tool for contact center agents, a system through which 40+ agents process customer orders, manage product catalogs, and handle transactions that generate between 600K and 3.7M MXN in daily revenue. Designing for internal tools at this scale means designing for people whose livelihood depends on the software working. Every second of friction costs customer time, puts a sale at risk, and adds pressure on an agent who's already on a live call.",
  metrics: [
    { value: '40+', label: 'Contact center agents', delta: 'Daily active users' },
    { value: '3.7M MXN', label: 'Peak daily revenue', delta: '600K–3.7M range' },
    { value: '7', label: 'Stakeholders validated', delta: 'Directors, managers, supervisors' },
    { value: 'In Production', label: 'Current status', delta: 'Staging' },
  ],
  sections: [
    {
      id: 'context',
      label: 'Context',
      title: 'An obsolete system and an undefined brief',
      image: '/images/projects/connect-liverpool/case-1.png',
      body: [
        "The tool I was asked to redesign was called CSC, a legacy Oracle-based platform agents had been using for years. By the time I got to it, the problems were well documented: it crashed often, forced agents to clear cookies just to log in, showed different prices and promotions than the main e-commerce site, and didn't support certain payment methods or purchase scenarios.",
        "Agents had built their own workarounds: opening multiple browser windows, keeping personal notes in parallel systems, jumping between CSC and the public site mid-call to check whether a price was even real. Picture an agent on a live call, unable to trust their own tool's prices, switching tabs to verify against the website customers themselves would see. That's not a UX problem to polish. It's a system failing the people who depend on it.",
        'The project had belonged to my subdirector before I joined. When she handed it to me, there wasn\'t much to go on: a finished login screen and a dev team waiting for designs. Scope, requirements, the actual size of the work, none of it was defined. I inherited a project at the start of its design phase with no brief.',
      ],
    },
    {
      id: 'research',
      label: 'Research',
      title: 'Learning the operation before designing for it',
      body: [
        "Before touching the design, I needed to understand how the operation actually ran, and documentation wasn't going to tell me that. I pulled from three sources to build that picture.",
      ],
      subsections: [
        {
          title: 'Contextual observation: shadowing',
          body: [
            "I sat with agents during live calls and watched how they moved through CSC: where they got stuck, what workarounds they'd built, how they managed the mental load of talking to a customer while fighting an unreliable tool.",
            "Shadowing surfaced things no pain point document would have caught: the exact sequence of clicks that crashed the system, how agents physically managed several windows at once, the moments where frustration became visible. That's how I found out the folio system, meant to save customer carts between calls, still existed but had basically died. Only two of the most experienced agents used it with any consistency.",
          ],
        },
        {
          title: 'Inherited research',
          body: [
            "My predecessors had already run a pain point mapping exercise with agents and supervisors. I reviewed it and checked it against what I was seeing in the field. It lined up: catalog inconsistency, system instability, missing purchase scenarios, and information that didn't travel with the transaction.",
          ],
        },
        {
          title: 'Stakeholder workshops',
          body: [
            "I ran sessions with directors, managers, and operations supervisors, the people accountable for the business outcomes Connect needed to support. These sessions did two things: surfaced operational requirements agents couldn't articulate themselves (revenue visibility, supervisor reporting, team performance metrics), and built organizational buy-in around what the new system had to do.",
          ],
        },
      ],
    },
    {
      id: 'folio',
      label: 'The folio system',
      title: "Designing what already existed, but didn't work",
      image: '/images/projects/connect-liverpool/case-2.png',
      body: [
        "The biggest design decision in this project wasn't something I invented. It was something I noticed.",
        "CSC already had a folio system. Half-built, barely understood, almost never used. It was meant to save customer carts between calls, which matters a lot in a contact center where people call back after thinking a purchase over. But nobody had ever properly designed, documented, or trained agents on it. Most didn't know it existed.",
        'Once I mapped the operation, the value of doing this properly became obvious. Customers call back. Supervisors need visibility into what agents are doing. Revenue tracking needs a record that outlives a single session. All three point to the same fix: a structured lifecycle for every customer interaction.',
      ],
      subsections: [
        {
          title: 'The folio lifecycle',
          body: [
            'I designed the folio system around four states that follow the natural life of a customer interaction.',
          ],
          items: [
            "Created: generated automatically when an agent starts attending to a customer, tied to that customer's identity.",
            'Active: the agent is working the call, adding products, building the cart.',
            "Open / Inactive: if the transaction isn't finished, the folio saves and stays accessible to any agent for 48 hours, searchable by customer data.",
            'Closed: the purchase goes through and the folio becomes a record.',
          ],
        },
        {
          title: 'The 48-hour window',
          body: [
            'The 48-hour window came from operational data: most callbacks happen within two days of the original call. After that, unclosed folios expire on their own, which keeps the system clean without anyone having to manage it by hand.',
            "Making folios searchable across agents mattered just as much. Turnover in a contact center is high, and a customer shouldn't have to repeat their whole situation just because the original agent isn't on shift anymore. Any agent can pick up where the last one left off.",
          ],
        },
      ],
    },
    {
      id: 'design',
      label: 'Design',
      title: 'Designing the system under real constraints',
      image: '/images/projects/connect-liverpool/case-4.png',
      subsections: [
        {
          title: 'Scope management: from full system to functional MVP',
          body: [
            'My first pass covered everything Connect needed to eventually be: folio management, catalog with real-time e-commerce parity, multiple purchase flows, customer identity management, supervisor dashboards, post-sale actions. When I brought this to the technical team, they were straightforward with me: some of it needed integrations and backend work that had already been cut from scope.',
            'I built an impact/effort matrix mapping every feature against its value to agents and the business, and brought it to the table as something we could work from together. The technical team laid out their constraints, I laid out the user and business reasoning, and we negotiated an MVP that would make Connect meaningfully better than CSC on day one, without dependencies that would stall the launch indefinitely.',
          ],
        },
        {
          title: 'Designing for a dual user',
          body: [
            'Connect has two very different users: agents and supervisors. Agents need speed and reliability, a tool that stays out of the way during a live call. Supervisors need visibility: revenue data, agent performance, transaction history.',
            "Designing for both inside one system meant making explicit information architecture calls. What shows up on an agent's home screen versus a supervisor's? How does the folio system serve both without piling cognitive overhead onto either? Those questions shaped the product's structure more than any visual decision did.",
          ],
        },
        {
          title: 'Solving catalog inconsistency through impersonate mode',
          body: [
            "One of the worst parts of the CSC experience was the gap between prices and promotions shown internally versus on the public site. An agent would quote a price, and the customer's checkout would show something else. That killed trust on both sides of the call.",
            "The fix was impersonate mode: agents browse the site from the customer's exact point of view, seeing the same catalog, prices, and promotions in real time. No discrepancy, no tab-switching mid-call. Building impersonate mode into the core agent workflow, rather than bolting it on later, was one of the first structural decisions I made.",
          ],
        },
      ],
    },
    {
      id: 'validation',
      label: 'Validation',
      title: 'Workshop with directors, managers, and operations supervisors',
      image: '/images/projects/connect-liverpool/case-5.png',
      body: [
        'Before development moved into its final phase, I ran a high-fidelity prototype workshop with seven stakeholders across director, manager, and supervisor roles. It produced structured feedback on UX, functionality, technical concerns, and priorities.',
      ],
      subsections: [
        {
          title: 'What resonated',
          body: [
            "Stakeholders described the interface as intuitive and visually consistent with Liverpool's existing digital products, and said they expected Connect to speed up calls and improve sales effectiveness compared to CSC.",
            "The folio system got the most detailed discussion, which is the outcome you want. People engaged seriously with the lifecycle, the terminology, the business rules behind it. Features nobody cares about don't get that kind of scrutiny.",
            "Impersonate mode landed as a real fix for CSC's catalog problem, confirming it belonged as a core part of the workflow rather than a nice-to-have.",
          ],
        },
        {
          title: 'What the feedback surfaced',
          body: [
            'The workshop produced a clear list of changes: rename "Cases" to "Folios" to match the language agents already use, add a total sales figure to the agent home view, improve the post-sale flow for resending tickets and generating invoices, and consolidate the search field.',
            "The feedback on the Notes feature was sharper. Several stakeholders argued for restricting it or cutting it entirely, worried about unstructured comments with no real operational value. That's the kind of pushback that only comes from people who know how the floor actually runs.",
          ],
        },
      ],
    },
    {
      id: 'impact',
      label: 'Status & Impact',
      title: 'Status and expected impact',
      body: [
        'Connect is currently in staging, in the pre-production final QA phase. At this point there is a validated high-fidelity prototype, a development build approaching production readiness, and a stakeholder group that has reviewed and signed off on the design direction.',
      ],
      subsections: [
        {
          title: 'Impact projections',
          body: [
            'Agents who currently juggle multiple browser windows, external catalogs, and workarounds will work from one reliable interface. The folio system gives every agent visibility into a customer\'s previous interactions, cutting the time spent rebuilding context on callback calls.',
            'Real-time catalog parity removes the price discrepancy that undermines agent credibility with customers today. The supervisor dashboard gives revenue visibility that CSC never had.',
            'Connect handles workflows processing between 600K and 3.7M MXN in daily revenue. Even a modest gain in agent efficiency or call completion rate matters at that scale.',
          ],
        },
      ],
    },
    {
      id: 'learnings',
      label: 'Learnings',
      title: 'What this project taught me',
      body: [
        'Connect was the first major project I owned at Liverpool. It came with no brief, no context, and an expectation that I would figure it out. That turned out to be the right condition to learn how to actually design a system.',
        "The most useful thing I did was not open Figma first. I went to the contact center, watched agents work, and listened to what they complained about, and to what they'd quietly stopped complaining about because they'd accepted it as normal. That time upfront is what gave the folio system its logic, and what reframed catalog inconsistency as a trust problem instead of a technical one.",
        "Cutting scope was uncomfortable. I'd designed something complete and had to trim it down. But doing that with an impact/effort matrix, instead of defending every feature on principle, is what separates shipping something that actually gets used from just protecting your own work.",
      ],
    },
  ],
  footnote:
    'Research conducted via contextual observation (shadowing), inherited pain point documentation, and stakeholder workshops (May 2025). Prototype validated with 7 stakeholders across director, manager, and supervisor roles. Product currently in staging: pre-production QA phase.',
}
