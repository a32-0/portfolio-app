import type { CaseStudy } from './types'

export const invoiceLiverpool: CaseStudy = {
  slug: 'invoice-liverpool',
  title: "Redesigning Liverpool's Invoicing Portal: From 35 Minutes to 3 Minutes",
  subtitle:
    "A legally sensitive, high-traffic flow that averaged 35 minutes per session. The fix wasn't just the UI.",
  overview:
    "Liverpool's invoicing portal serves 184,000+ users a month. These are people trying to get a legal fiscal receipt after a purchase. In Mexico, invoicing carries real weight: customers submit their RFC tax ID, fiscal regime, and personal data to receive a CFDI, a document with actual legal and financial consequences. Get it wrong and you're calling support. Get it very wrong and you miss a tax deadline. When this redesign landed on my desk, the portal averaged 35 minutes per session and took over 10 page navigations to finish something that should take under 3.",
  metrics: [
    { value: '−92%', label: 'Avg. session duration', delta: '35:10 → 2:56 min' },
    { value: '−72%', label: 'Pages per visit', delta: '10.63 → 2.93 pages' },
    { value: '184K+', label: 'Monthly users', delta: 'High-traffic, legally sensitive' },
    { value: '~37%', label: 'Bounce rate', delta: 'Stable, not abandonment' },
  ],
  sections: [
    {
      id: 'context',
      label: 'Context',
      title: 'A high-stakes, broken flow',
      image: '/images/projects/invoice-liverpool/case-1.png',
      imageWidth: 1832,
      imageHeight: 2772,
      body: [
        "The invoicing portal lived on a separate subdomain from Liverpool's main e-commerce site. Users landed there from their purchase history or by searching directly, and what they found was fragmented: two separate portals depending on the type of purchase, inconsistent UI, poor error messaging, no clear sense of progress.",
        "A 35-minute average on a form that should take 3 isn't a UX problem you fix with polish. It's a sign something structural is broken. Users hit dead ends, retried failed submissions without knowing why they'd failed, and often gave up entirely.",
      ],
      subsections: [
        {
          title: 'Why invoicing is unusually complex',
          body: [
            "Most redesign briefs are about simplifying a flow. This one had an extra constraint: the process runs on legally mandated fields (RFC, fiscal regime, CFDI use) that can't just be cut. Every simplification had to fit inside Mexico's fiscal compliance rules, so the actual problem wasn't \"remove steps,\" it was \"make necessary complexity feel manageable.\" That distinction shaped everything that came after.",
          ],
        },
      ],
    },
    {
      id: 'research',
      label: 'Research',
      title: 'Multi-method, multi-source',
      body: [
        'Before touching the design, I ran a research sprint combining four methods to look at the problem from different angles.',
      ],
      subsections: [
        {
          title: 'Heuristic evaluation',
          body: [
            "A Nielsen-based audit of the existing portal turned up the worst problems fast: no feedback after invoice generation, a search icon that didn't behave like a button, tooltips that redirected users off the portal entirely, no email confirmation. These weren't edge cases. They broke the core flow for every single user, every time.",
          ],
        },
        {
          title: 'A/B usability testing, unmoderated and remote via Maze',
          body: [
            'I tested two redesigned proposals with 14 participants across devices (85.7% desktop, matching actual traffic). The results pointed in a clear direction: Proposal 1 averaged 67.9 sec completion with 4.8/5 satisfaction but a 58.6% misclick rate. Proposal 2 averaged 86.2 sec with 4.5/5 satisfaction and a 28.2% misclick rate.',
            'Proposal 1 was faster and rated higher, but the misclick data pointed at one specific issue: the RFC search trigger looked like an icon, not a button. That single affordance mistake accounted for most of the misclicks. Fixable, not structural.',
          ],
        },
        {
          title: 'Contact center interview',
          body: [
            "A direct interview with a Liverpool contact center agent gave me unfiltered insight into the most common failures: users who didn't understand the difference between fiscal person types, users who submitted wrong data with no way to correct it, users who never got their invoice by email and assumed the whole thing had failed. Agents were absorbing the cost of every one of these failures.",
          ],
        },
        {
          title: 'Competitive benchmarking',
          body: [
            "I looked at five retail competitors (Costco, Sam's Club, Walmart, Palacio de Hierro, and Alsuper) across four dimensions: where invoicing lives, how many steps it takes, what help tools exist, and visual consistency. The finding was straightforward: Liverpool's portal looked more modern than most competitors, but took more steps and offered less help along the way.",
          ],
        },
        {
          title: 'Traffic analysis via SimilarWeb',
          body: [
            "Half of all visits were direct, meaning people knew where to go. But once they arrived, the behavior fell apart. An average of 10.63 pages per visit and a 35-minute session on what should be a simple form meant one thing: people were getting lost and retrying, not browsing on purpose.",
          ],
        },
      ],
    },
    {
      id: 'decision',
      label: 'The key decision',
      title: 'The decision nobody had mapped',
      image: '/images/projects/invoice-liverpool/case-2.png',
      imageWidth: 1832,
      imageHeight: 1548,
      body: [
        'The original brief was clear: redesign the invoicing portal for internal merchandise purchases. What nobody had documented, or seemingly noticed, was that Liverpool ran two separate invoicing portals for different purchase types, and users kept landing on the wrong one.',
        "A customer who bought from a Liverpool marketplace seller would show up at the internal portal, enter their data, and get an error with no explanation of why or where to go instead. The system knew what had happened. It just never told them. Once I mapped the full journey, this split turned out to be the single biggest source of confusion in the whole flow.",
      ],
      subsections: [
        {
          title: 'The pushback',
          body: [
            'When I brought the idea of unifying the portals to the development team, I got resistance. The two ran on different backend systems, and the engineering coordinator argued unification was out of scope, technically messy, and unnecessary. Users could just get redirected.',
            "My argument was that redirection isn't a design solution. A user who has already entered their RFC and personal data, hits an error, and gets sent to start over on a different portal has already had a bad experience, whether or not the handoff worked correctly on the backend. Liverpool's internal architecture shouldn't be the customer's problem to figure out.",
            'That conversation wasn\'t easy. But the argument held, the product lead backed the unification, and we built a single portal instead of two. It wasn\'t in the original brief. It came out of research, got argued through on its merits, and got built despite pushback, and it\'s almost certainly the single biggest driver behind the results after launch.',
          ],
        },
      ],
    },
    {
      id: 'design',
      label: 'Design',
      title: 'Reducing cognitive load in a legally complex flow',
      image: '/images/projects/invoice-liverpool/case-3.png',
      imageWidth: 1832,
      imageHeight: 1412,
      body: ['With the structural decision made, the design work focused on four areas.'],
      subsections: [
        {
          title: 'Unified single-form experience',
          body: [
            'One portal, one flow, one entry point. Users enter their invoicing code, whatever type it is, and the system classifies it silently in the background. No upfront decision from the user about portal type or merchandise category.',
          ],
        },
        {
          title: 'Progressive disclosure for fiscal fields',
          body: [
            "Mexico's fiscal data requirements are mandatory and, for a lot of people, confusing. Instead of showing every field at once, the redesign reveals them in sequence: ticket data first, fiscal identification second, personal data third. Each section is manageable on its own. The complexity didn't go away, but it's no longer all hitting the user at the same time.",
          ],
        },
        {
          title: 'Actionable error states and system feedback',
          body: [
            'The heuristic audit flagged missing feedback as a core failure. The redesign added clear confirmation when an invoice generates, specific error messages tied to the exact field that failed along with how to fix it, and email confirmation by default instead of as an afterthought. Users needed to know the system had actually registered what they did.',
          ],
        },
        {
          title: 'RFC field interaction fix',
          body: [
            'The misclick data from the A/B test pointed straight at the RFC search trigger. The icon became a clearly interactive button with an explicit label, which removed the ambiguity that had caused most of the misclicks in testing.',
          ],
        },
      ],
    },
    {
      id: 'impact',
      label: 'Impact',
      title: 'Impact',
      image: '/images/projects/invoice-liverpool/case-4.png',
      imageWidth: 1832,
      imageHeight: 1412,
      body: [
        'The results, measured via SimilarWeb roughly a year after launch, show a real shift in how people use the portal.',
        'Average session duration dropped from 35:10 to 2:56, a 92% reduction. Pages per visit dropped from 10.63 to 2.93, a 72% reduction. Bounce rate held steady around 37%, which confirms the shorter sessions mean people are finishing the task, not giving up sooner.',
        "A 92% drop in session time on a legally sensitive, high-volume flow isn't just a UX number. It's a business one. Every minute saved across 184,000 monthly users is friction, support load, and frustration removed at scale.",
      ],
      subsections: [
        {
          title: "What the numbers don't capture",
          body: [
            "Unifying the two portals removed an entire category of error that never showed up in the data before: people who failed silently and never came back. There's no metric for someone who gave up, called support, or just never invoiced their purchase. That's what made the portal unification the hardest call to argue for, and the one with the deepest impact.",
          ],
        },
      ],
    },
    {
      id: 'learnings',
      label: 'Learnings',
      title: 'What this project taught me',
      body: [
        "The most valuable decision on this project wasn't in the brief. It came from looking at the problem at a system level instead of accepting the scope as given. A designer who only redesigns what they're handed will produce better screens. A designer who asks whether the screens are even the right problem will occasionally change the actual outcome.",
        'The resistance from development was real, and it took several conversations to work through. What made the argument work was that it came from user behavior data, not design preference, and that the alternative had a clear, measurable human cost attached to it.',
        "Research doesn't just answer the questions you brought to it. Pay attention and it'll show you the questions you should have asked in the first place.",
      ],
    },
  ],
  footnote:
    'Traffic metrics sourced from SimilarWeb (Jan 2025 pre-launch baseline vs. Mar 2026 post-launch). Usability testing conducted via Maze with 14 participants. Competitive benchmarking conducted across 5 Mexican retail portals.',
}
