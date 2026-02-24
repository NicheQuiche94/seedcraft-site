import type { PitchConfig } from '@/types/pitch'

export const escapage: PitchConfig = {
  slug: 'escapage',
  envKey: 'PITCH_PASSWORD_ESCAPAGE',
  theme: {
    accent: '#0EA5B7',
    accentDim: '#0C8B9A',
    accentGlow: 'rgba(14, 165, 183, 0.12)',
    accentGlowStrong: 'rgba(14, 165, 183, 0.25)',
    bg: '#FFFDF7',
    bgCard: '#F7F5F0',
    bgCardAlt: '#F0EDE6',
    text: '#1a1a2e',
    textMuted: '#4a4a6a',
    border: 'rgba(26, 26, 46, 0.08)',
    fontSerif: 'DM Serif Display',
    fontSans: 'Plus Jakarta Sans',
    fontSerifWeights: 'ital@0;1',
    fontSansWeights: 'wght@400;500;600;700',
  },
  content: {
    hero: {
      badge: 'Seedcraft Pitch Deck — Guest Co-Founder',
      titleStart: 'Esca',
      titleAccent: 'page',
      subtitle:
        'A daily writing habit app that puts collaboration, safety, and craft at the centre of the creative process.',
      originatorName: 'Founder',
      originatorRole: 'Idea Originator',
      studioRole: 'Venture Studio',
    },

    market: {
      label: 'The Market',
      title: 'Writers are ',
      titleAccent: 'underserved everywhere',
      body: 'The creative writing tool market is fragmented, generic, and built for productivity — not craft. Writers are using note apps, Google Docs, and Notion because nothing purpose-built exists.',
      stats: [
        { number: '300M+', label: 'People who write regularly for pleasure' },
        { number: '$2B+', label: 'Writing & journalling app market' },
        { number: '0', label: 'Purpose-built daily writing habit apps' },
      ],
    },

    problem: {
      label: 'The Problem',
      title: 'Four gaps, ',
      titleAccent: 'one product',
      body: "No existing app addresses what writers actually need: community, safety, craft, and habit. They're scattered across tools that weren't made for them.",
      cards: [
        {
          icon: 'Users',
          title: 'Collaboration is broken',
          body: 'No app makes collaborative creative writing feel alive, structured, and purposeful.',
        },
        {
          icon: 'Archive',
          title: 'Archiving is an afterthought',
          body: 'Writers scatter work across Notes, Docs, Notion, and email drafts. Nothing organises creative work the way writers think.',
        },
        {
          icon: 'ShieldOff',
          title: 'AI training fears are real',
          body: 'The writing community is deeply anti-AI-generated content. Platforms that scrape work for training are breaking trust at scale.',
        },
        {
          icon: 'CalendarX',
          title: 'Habit building is ignored',
          body: 'Most tools focus on output, not practice. Nobody is building the daily ritual that turns casual writers into committed ones.',
        },
      ],
    },

    originalIdea: {
      label: 'The Original Idea',
      title: 'Three modes, ',
      titleAccent: 'one creative home',
      body: 'The founder designed a writing app with three distinct modes — each serving a different need in a writer\'s practice.',
      comparisonThemLabel: 'Generic Writing Apps',
      comparisonUsLabel: 'Escapage',
      rows: [
        { feature: 'Daily solo writing', them: 'Blank document', us: 'Structured Solo mode with timer' },
        { feature: 'Collaborative writing', them: 'Shared Google Doc', us: 'Circle sessions — same time, same energy' },
        { feature: 'Creative play', them: 'None', us: 'Turn-based Play mode' },
        { feature: 'Archive', them: 'File tree / folders', us: 'Tagged, searchable, auto-organised' },
        { feature: 'Community ritual', them: 'None', us: 'Escapage Hour — everyone writes together' },
      ],
      insight:
        '"Most writing apps are built for productivity. Escapage is built for craft. The difference is everything."',
      insightAttr: '— Seedcraft positioning analysis',
    },

    shift: {
      label: 'Enter Seedcraft',
      title: 'We loved the modes. We added ',
      titleAccent: 'three strategic moats.',
      body: 'The original concept was strong. Seedcraft\'s job was to identify the whitespace nobody else is filling and build it into the foundation.',
      old: {
        title: 'Writing App',
        body: 'Solo, Circle, Play. A thoughtful set of modes. But without defensible differentiation, it competes on features alone.',
      },
      new: {
        title: 'Creative Sanctuary',
        body: 'Collaboration network effects + AI-proof architecture + habit infrastructure. Three moats that compound over time.',
      },
    },

    whyShift: {
      label: 'The Three Moats',
      title: 'What nobody else ',
      titleAccent: 'does well',
      cards: [
        {
          icon: 'Network',
          title: 'Collaboration that feels human',
          body: 'Synchronous circle sessions and turn-based play games build network effects into daily writing practice. Community is the moat no feature set can replicate.',
        },
        {
          icon: 'Brain',
          title: 'Archive that works like your brain',
          body: 'Searchable, tagged by session type, date, and theme. Think Google Drive\'s reliability meets a purpose-built creative portfolio.',
        },
        {
          icon: 'ShieldCheck',
          title: 'AI-proof by design',
          body: 'End-to-end encryption, a public commitment to never sell data, and technical guardrails that make it structurally impossible for work to be used for AI training.',
        },
        {
          icon: 'Repeat',
          title: 'Habit infrastructure',
          body: 'Onboarding sets your writing time. Escapage Hour creates daily urgency. The app is built around showing up — not just writing when inspiration strikes.',
        },
      ],
      insight:
        '"In a market where trust is eroding fast, being verifiably, architecturally safe is a category-defining position."',
      insightAttr: '— Seedcraft strategic analysis',
    },

    branding: {
      label: 'The Name',
      title: 'A space to ',
      titleAccent: 'escape into writing',
      readOneWayLabel: 'Read it one way',
      readOneWayName: 'Escape + Age',
      readOneWayTagline: 'An era defined by the act of escaping into writing',
      readOtherLabel: 'Read it another',
      readOtherName: 'Escapage',
      readOtherTagline: 'A place — a sanctuary — you return to every day',
      insight:
        '"Not a tool. Not an app. A place writers belong to."',
      insightAttr: '— Seedcraft brand strategy',
    },

    revenue: {
      label: 'Revenue Model',
      title: 'Community-led, ',
      titleAccent: 'subscription-powered',
      body: 'A freemium model with Solo mode free and Circle/Play behind a low-friction subscription. Network effects drive organic growth.',
      scenarios: [
        {
          label: 'Scenario A — Niche',
          amount: '£240K',
          period: 'per year',
          detail: '10,000 subscribers\n£2/mo average',
        },
        {
          label: 'Scenario B — Community Product',
          amount: '£1.2M',
          period: 'per year',
          detail: '50,000 subscribers\n£2/mo average',
          featured: true,
        },
        {
          label: 'Scenario C — Category Leader',
          amount: '£6M',
          period: 'per year',
          detail: '250,000 subscribers\n£2/mo average',
        },
      ],
      insight:
        '"Writers are loyal subscribers. When a tool becomes part of your daily ritual, churn is structurally low."',
      insightAttr: '— Revenue model note',
    },

    process: {
      label: 'The Seedcraft Process',
      title: 'What we build. What you ',
      titleAccent: 'receive.',
      steps: [
        {
          title: 'Validate & Research',
          body: 'Market research, competitor analysis, positioning strategy. We map the creative writing landscape and find the whitespace precisely.',
          value: 'Value: £2–5K',
        },
        {
          title: 'Build the MVP',
          body: 'Full prototype/MVP build of Escapage. Solo mode, the archive, the AI-protection layer, the habit loop, the onboarding flow. Everything a writer needs to start using it daily.',
          value: 'Value: £15–35K',
        },
        {
          title: 'Technical Audit',
          body: 'Ensure the product is production-ready, performant, and scalable for release. End-to-end encryption verification. Security review.',
          value: 'Value: £2–5K',
        },
        {
          title: 'Launch with GTM',
          body: 'Go-to-market plans. App store optimisation. Community seeding strategy. First user acquisition through writing communities.',
          value: 'Value: £2–5K',
        },
        {
          title: 'MVP → MVP+1',
          body: 'Add Circle and Play modes. Launch Escapage Hour. Layer in vocab expansion and constrained challenges. Iterate from minimum viable to genuinely delightful.',
          value: 'Value: £5–10K',
        },
        {
          title: 'Find Acquisition Partners',
          body: 'Once we hit £10–30K MRR, we find the right team or acquirer to scale. Seedcraft retains 10% equity. You retain 50% of that 10%\'s future revenue.',
          value: 'Value: £10K',
        },
      ],
    },

    deal: {
      label: 'The Deal',
      headline: 'The deal: ',
      headlineAccent: '50/50',
      subheading:
        'In exchange for 50% of the IP, Seedcraft delivers the entire 0→1 journey. No cash investment required from the idea originator.',
      items: [
        { text: 'Market research & validation' },
        { text: 'Competitor analysis' },
        { text: 'Full MVP build' },
        { text: 'Technical audit' },
        { text: 'GTM launch strategy' },
        { text: 'Post-launch iteration' },
        { text: 'Acquisition partner search' },
        { text: 'Ongoing advisory post-sale' },
      ],
      totalLabel: 'Total value delivered',
      totalValue: '£36–70K',
      totalNote:
        'Equivalent to selling your idea at a £140K valuation — before it even launches.',
    },

    closing: {
      studioLabel: 'Seedcraft',
      projectLabel: 'Escapage',
      title: 'Let\'s build the home ',
      titleAccent: 'writers actually need.',
      subtitle: 'If you believe writers deserve better tools, a safer space, and a community that values craft — we should talk.',
      footerText: '© 2025 Seedcraft Ventures Ltd · Confidential',
    },
  },
}