import type { PitchConfig } from '@/types/pitch'
import { escapageMockups } from '@/components/pitch/mockups/escapage'

export const escapage: PitchConfig = {
  slug: 'escapage',
  envKey: 'PITCH_PASSWORD_ESCAPAGE',
  mockupComponents: escapageMockups,

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
    fontHandwriting: 'Caveat',
    fontSerifWeights: 'ital@0;1',
    fontSansWeights: 'wght@400;500;600;700',
    fontHandwritingWeights: 'wght@500;700',
    secondaryAccent: '#FFD93D',
    secondaryAccentLight: '#FFF8DB',
    bgWarm: '#F7F5F0',
  },

  content: {
    hero: {
      badge: 'Seedcraft Pitch Deck — Guest Co-Founder',
      titleStart: 'Build the home writers ',
      titleAccent: 'actually need',
      subtitle: "A daily writing habit app that puts collaboration, safety, and craft at the centre of the creative process. Here's why we want to build it — and why we want to build it with you.",
      originatorName: 'Founder',
      originatorRole: 'Idea Originator',
      studioRole: 'Venture Studio',
      handwrittenNote: { text: "the pen is mightier when it's protected ✎", rotation: -1 },
    },

    market: {
      label: 'The Opportunity',
      title: 'Writing apps are ',
      titleAccent: 'broken',
      body: "The market for creative writing tools is massive, growing — and entirely missing the point of what writers actually want.",
      stats: [
        { number: '$2.1B', label: 'Global creative writing software market by 2027' },
        { number: '62%', label: 'Of early writers quit within the first 3 months' },
        { number: '81%', label: 'Of writers concerned about AI using their work' },
      ],
      handwrittenNote: { text: "huge market, nobody doing it right ✨", rotation: 1.5 },
    },

    problem: {
      label: 'The Problem',
      title: 'Existing tools treat writing as a ',
      titleAccent: 'solo, disposable act',
      body: '',
      cards: [
        { icon: 'Lock', title: 'No real collaboration', body: "Google Docs is functional but sterile. No app makes collaborative creative writing feel alive, structured, and purposeful." },
        { icon: 'Archive', title: 'Archiving is an afterthought', body: "Writers scatter work across Notes, Docs, Notion, and email drafts. Nothing organises creative work the way writers think." },
        { icon: 'Bot', title: 'AI training fears are real', body: "The writing community is deeply anti-AI-generated content. Platforms that scrape work for training are breaking trust at scale." },
        { icon: 'HeartCrack', title: 'Habit building is ignored', body: "Most tools focus on output, not practice. Nobody is building the daily ritual that turns casual writers into committed ones." },
      ],
      handwrittenNote: { text: "four gaps, one product →", rotation: 1 },
    },

    pillars: {
      label: 'Our Strategic Edge',
      title: 'Three things ',
      titleAccent: 'nobody does well',
      subtitle: "We're using a reverse-benchmarking approach — inspired by the thinking of Rory Sutherland and Will Guidara — to find value where competitors aren't even looking.",
      pillars: [
        {
          icon: 'Handshake',
          title: 'Collaboration That Feels Human',
          body: "Not just \"share a doc.\" Escapage builds structured collaborative modes — from synchronous circle sessions to turn-based creative games — that make writing together feel intentional, not accidental.\n\nCircle sessions let groups write alongside each other with a shared intent. Play mode introduces games like round-robin storytelling where each writer only sees the previous line. This isn't Google Docs with a timer — it's a fundamentally different model for creative community.",
          detail: '"Community is the moat that no feature set can replicate." — We\'re building network effects into daily writing practice itself.',
        },
        {
          icon: 'BookOpen',
          title: 'Archive That Works Like Your Brain',
          body: "Writers don't think in file trees. Escapage's archive is searchable, browsable, and beautifully organised — a living library of everything you've written, tagged by session type, date, and theme.\n\nThink Google Drive's reliability meets a purpose-built creative portfolio. Every session is automatically captured, timestamped, and searchable. Writers never lose work, and they can revisit old pieces when inspiration calls them back.",
          detail: "A writer's archive isn't a filing cabinet — it's their creative DNA. We treat it accordingly.",
        },
        {
          icon: 'ShieldCheck',
          title: 'AI-Proof by Design',
          body: "Escapage is built from the ground up as a safe space for human writing. Your words are yours. Full stop. No training, no scraping, no exceptions.\n\nThis isn't a policy — it's an architecture decision. End-to-end encryption for stored work, a public commitment to never sell data, and technical guardrails that make it structurally impossible for work to be used for AI training. For a community that's deeply hostile to AI in creative spaces, this is the trust foundation everything else is built on.",
          detail: "In a market where trust is eroding fast, being verifiably, architecturally safe is a category-defining position.",
        },
      ],
      handwrittenNote: { text: "the moat is in what everyone ignores 💡", rotation: -1.5 },
    },

    mockups: {
      label: 'What This Looks Like',
      title: 'The three moats, ',
      titleAccent: 'in your hand',
      handwrittenNote: { text: "these are the features we'd double down on ✍", rotation: 1.5 },
      items: [
        {
          label: 'Smart Archive',
          sublabel: 'Searchable, tagged, never lost.',
          handwrittenNote: { text: "Google Drive, but for your soul", rotation: -1 },
          component: 'archive',
        },
        {
          label: 'AI-Proof Writing',
          sublabel: 'WhatsApp-style encryption notice.',
          handwrittenNote: { text: "trust, built into every pixel", rotation: 1 },
          component: 'aiProof',
        },
        {
          label: 'Vocab Builder',
          sublabel: 'Games that expand your craft.',
          handwrittenNote: { text: "play mode, but useful 🌟", rotation: -1 },
          component: 'vocabGame',
        },
      ],
    },

    modes: {
      label: 'The Product — Core Modes',
      title: 'Three ways ',
      titleAccent: 'to write',
      subtitle: "Your original product vision — three distinct writing modes, each serving a different need.",
      modes: [
        {
          icon: 'PenLine',
          title: 'Solo',
          tag: 'Daily Practice',
          body: "Set your daily writing time during onboarding. Show up, write, build the habit. A distraction-free canvas with a gentle timer and nothing else in your way.",
          origin: 'founder',
        },
        {
          icon: 'Circle',
          title: 'Circle',
          tag: 'Group Sessions',
          body: "Schedule or join a circle with a shared intent. Write alongside others in a synchronous session — same time, same energy, different projects. Accountability meets community.",
          origin: 'founder',
        },
        {
          icon: 'Dices',
          title: 'Play',
          tag: 'Creative Games',
          body: "Turn-based collaborative writing games. Each writer only writes the next line. Your original idea, and the spark that makes Escapage different.",
          origin: 'founder',
        },
      ],
      handwrittenNote: { text: "your vision, and it's strong 🙌", rotation: -2 },
    },

    attribution: {
      label: 'Idea Attribution',
      title: "What's on the table — ",
      titleAccent: 'and who brought it',
      subtitle: "Transparency matters. Here's what you designed vs. what Seedcraft would add. We build all of it, but we want to be clear about origins.",
      founderSectionLabel: '☀ Your Vision',
      seedcraftSectionLabel: '✨ Seedcraft Additions',
      items: [
        { origin: 'founder', title: 'Solo, Circle & Play modes', body: "The three core writing modes — daily solo practice, group circle sessions, and turn-based play games. The product backbone." },
        { origin: 'founder', title: 'Escapage Hour', body: "A community-wide daily writing event where everyone writes at the same time. Creates ritual, urgency, and collective energy." },
        { origin: 'founder', title: '"Leave a first line"', body: "Writers can leave opening lines for others to pick up and continue — a beautiful mechanic for seeding creativity across the community." },
        { origin: 'founder', title: 'Daily habit framework', body: "Onboarding sets your writing time. The app is built around showing up every day. Habit-first design, not output-first." },
        { origin: 'seedcraft', title: 'Vocabulary expansion games', body: "Play mode enhanced with word-of-the-day challenges, fill-in-the-blank exercises, and constrained writing rounds that build craft, not just community." },
        { origin: 'seedcraft', title: 'Smart Archive system', body: "Google Drive-quality storage built for writers. Searchable, filterable by mode, auto-tagged, and designed as a living creative portfolio." },
        { origin: 'seedcraft', title: 'AI-proof architecture', body: "End-to-end encryption, visible trust signals throughout the UI, and a structural guarantee that work is never used for AI training. The trust moat." },
        { origin: 'seedcraft', title: 'Constrained writing challenges', body: "Write in 50 words. Write without adjectives. Write from a single sense. Constraints that push writers to grow — layered into Play mode." },
      ],
      handwrittenNote: { text: "credit where it's due, always ✌", rotation: 1 },
    },

    buildSummary: {
      label: 'The Full Build',
      title: 'Everything we ship',
      ogLabel: 'OG',
      ogItems: "Solo mode, Circle mode, Play mode (turn-based), Escapage Hour, \"Leave a first line\", daily habit framework",
      newLabel: 'NEW',
      newItems: "Smart Archive, AI-proof encryption, vocab expansion, constrained challenges, research & positioning, narrative & brand",
      handwrittenNote: { text: "one product, two minds, zero ego 💪", rotation: -1 },
    },

    revenue: {
      label: 'Revenue Model',
      title: 'Community-led, ',
      titleAccent: 'subscription-powered',
      body: "A freemium model with Solo mode free and Circle/Play behind a low-friction subscription. Network effects drive organic growth.",
      scenarios: [
        { label: 'Scenario A — Niche', amount: '£240K', period: 'per year', detail: '10,000 subscribers\n£2/mo average' },
        { label: 'Scenario B — Community Product', amount: '£1.2M', period: 'per year', detail: '50,000 subscribers\n£2/mo average', featured: true },
        { label: 'Scenario C — Category Leader', amount: '£6M', period: 'per year', detail: '250,000 subscribers\n£2/mo average' },
      ],
      insight: '"Writers are loyal subscribers. When a tool becomes part of your daily ritual, churn is structurally low."',
      insightAttr: '— Revenue model note',
    },

    process: {
      label: 'The Seedcraft Process',
      title: 'What we build. What you ',
      titleAccent: 'receive.',
      steps: [
        { title: 'Validate & Research', body: "Market research, competitor analysis, positioning strategy. We map the creative writing landscape and find the whitespace precisely.", value: 'Value: £2–5K' },
        { title: 'Build the MVP', body: "Full prototype/MVP build of Escapage. Solo mode, the archive, the AI-protection layer, the habit loop, the onboarding flow. Everything a writer needs to start using it daily.", value: 'Value: £15–35K' },
        { title: 'Technical Audit', body: "Ensure the product is production-ready, performant, and scalable for release. End-to-end encryption verification. Security review.", value: 'Value: £2–5K' },
        { title: 'Launch with GTM', body: "Go-to-market plans. App store optimisation. Community seeding strategy. First user acquisition through writing communities.", value: 'Value: £2–5K' },
        { title: 'MVP → MVP+1', body: "Add Circle and Play modes. Launch Escapage Hour. Layer in vocab expansion and constrained challenges. Iterate from minimum viable to genuinely delightful.", value: 'Value: £5–10K' },
        { title: 'Find Acquisition Partners', body: "Once we hit £10–30K MRR, we find the right team or acquirer to scale. Seedcraft retains 10% equity. You retain 50% of that 10%'s future revenue.", value: 'Value: £10K' },
      ],
      handwrittenNote: { text: "same playbook, every time – because it works ☕", rotation: 1.5 },
    },

    deal: {
      label: 'The Deal',
      headline: 'The deal: ',
      headlineAccent: '50/50',
      subheading: "Seedcraft holds the IP during the build phase under an IP ownership agreement. Upon divesting or sale, ownership splits 50/50.",
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
      totalNote: "Equivalent to valuing your idea at £140K, before it even launches.",
      ipStructure: {
        title: 'IP Ownership Structure',
        body: "During build: IP sits under the Seedcraft banner. We fund and execute the entire 0→1 journey. No cash investment required from you.\n\nUpon sale or divestment: IP ownership splits 50/50. You receive 50% of all sale proceeds, 50% of any ongoing revenue share, and 50% of all remaining equity post-transaction.",
      },
      handwrittenNote: { text: "simple terms, real alignment 🤝", rotation: -1 },
    },

    role: {
      label: 'Your Role',
      title: 'What a guest co-founder ',
      titleAccent: 'does',
      subtitle: "The guest co-founder model is how Seedcraft brings in the right domain expertise at the right time. You're not an employee, you're not an investor — you're a building partner.",
      roles: [
        { title: 'Product thinking', body: "Help shape the product decisions that define what Escapage becomes — from UX to feature priority to community design." },
        { title: 'Domain expertise', body: "Bring your understanding of writers, creative communities, and the habits that make or break a daily practice tool." },
        { title: 'Build alongside us', body: "This isn't advisory from the sidelines. You're in the building, shipping, and iterating process with us." },
        { title: 'Shared upside', body: "Equity stake, exit participation, and the satisfaction of having built something real from nothing." },
      ],
      ctaTitle: "Let's build this together",
      ctaBody: "If you believe writers deserve better tools, a safer space, and a community that values craft — we should talk.",
      ctaEmail: 'hello@seedcraft.co',
      handwrittenNote: { text: "the best stories start with two people saying \"let's go\" ✎", rotation: -1 },
    },

    closing: {
      studioLabel: 'Seedcraft',
      projectLabel: 'Escapage',
      title: "Let's build the home writers ",
      titleAccent: 'actually need.',
      subtitle: "If you believe writers deserve better tools, a safer space, and a community that values craft — we should talk.",
      footerText: '© 2025 Seedcraft Ventures Ltd · Confidential',
    },
  },
}