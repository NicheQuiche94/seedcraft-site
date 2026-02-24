import type { PitchConfig } from '@/types/pitch'

export const smokeless: PitchConfig = {
  slug: 'smokeless',
  envKey: 'PITCH_PASSWORD_SMOKELESS',
  theme: {
    accent: '#00d47b',
    accentDim: '#00a35f',
    accentGlow: 'rgba(0, 212, 123, 0.15)',
    accentGlowStrong: 'rgba(0, 212, 123, 0.3)',
    bg: '#0a0a0a',
    bgCard: '#111111',
    bgCardAlt: '#161616',
    text: '#e8e8e8',
    textMuted: '#888888',
    border: 'rgba(255,255,255,0.06)',
    fontSerif: 'Instrument Serif',
    fontSans: 'DM Sans',
    fontSerifWeights: 'ital@0;1',
    fontSansWeights: 'ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600',
  },
  content: {
    hero: {
      badge: 'Seedcraft Pitch Deck — Guest Co-Founder',
      titleStart: 'Smoke',
      titleAccent: 'Less',
      subtitle:
        'Not another quit-smoking app. The first app designed to help you reduce — so quitting actually works.',
      originatorName: 'Gabri',
      originatorRole: 'Idea Originator',
      studioRole: 'Venture Studio',
    },

    market: {
      label: 'The Market',
      title: 'A massive, ',
      titleAccent: 'recurring problem',
      body: "Smoking cessation isn't a one-time purchase. It's a cycle of attempts, failures, and retries that spans years — creating a market with enormous volume and built-in repeat engagement.",
      stats: [
        { number: '1.25B', label: 'Smokers worldwide' },
        { number: '70–80%', label: 'Relapse within 3 months' },
        { number: '$1B', label: 'Quit-smoking app market' },
      ],
    },

    problem: {
      label: 'The Problem',
      title: 'Existing apps are built for ',
      titleAccent: 'the wrong moment',
      body: "Every competitor — Kwit, Smoke Free, QuitNow — assumes a calm, reflective user. But the moment someone needs help, they're stressed, impulsive, and craving. High cognitive load = failure.",
      cards: [
        {
          icon: 'BarChart2',
          title: 'Tracking ≠ Action',
          body: "Counting cigarettes doesn't stop someone from lighting up. The data is useful after the fact — not during a craving.",
        },
        {
          icon: 'HeartCrack',
          title: 'Streak guilt',
          body: "One slip and your 30-day streak resets to zero. The app designed to motivate you now makes you feel like a failure.",
        },
        {
          icon: 'BookOpen',
          title: 'Content overload',
          body: "Articles, tips, badges. Nobody reads a motivational paragraph at 11pm when they're desperate for a cigarette.",
        },
        {
          icon: 'DoorOpen',
          title: 'Binary outcome',
          body: "You either quit or you don't. No middle ground. No progress. No reason to keep the subscription.",
        },
      ],
    },

    originalIdea: {
      label: 'What Was Brought To Us',
      title: 'Gabri\'s original idea: the ',
      titleAccent: 'haptic',
      body: "A quit-smoking app with a single, powerful interaction: press and hold a button for 3 seconds when you're craving. The phone vibrates. The urge passes. No reading. No thinking. Just pressing.",
      comparisonThemLabel: 'Kwit / Smoke Free',
      comparisonUsLabel: 'Gabri\'s App',
      rows: [
        { feature: 'Core model', them: 'Tracking + motivation', us: 'Action during craving' },
        { feature: 'Cognitive load', them: 'Medium–high', us: 'Zero' },
        { feature: 'User state assumed', them: 'Calm, reflective', us: 'Stressed, impulsive' },
        { feature: 'Failure handling', them: 'Streak loss, guilt', us: 'Neutral, shame-free' },
        { feature: 'Primary interaction', them: 'Reading / tracking', us: 'Physical pressing' },
      ],
      insight:
        '"They explain why to quit. This helps users not smoke right now. This is habit interruption, not education."',
      insightAttr: '— Market positioning analysis',
    },

    shift: {
      label: 'Enter Seedcraft',
      title: 'We loved the haptic. We ',
      titleAccent: 'rethought everything else.',
      body: 'The original pitch was a quit-smoking app. But after deep research, we identified a fundamental problem: quit-or-nothing framing kills retention and limits the addressable market.',
      old: {
        title: 'Quit Smoking',
        body: 'Binary outcome. High churn. Guilt on failure. Competing with hundreds of apps. Impulse buys from 12-hour motivation spikes.',
      },
      new: {
        title: 'Smoke Less',
        body: 'Gradual reduction. Gamified progress. Every resisted craving is a win. 6-month commitment plans. A market of one.',
      },
    },

    whyShift: {
      label: 'Why This Matters',
      title: 'Reduction solves ',
      titleAccent: 'every problem quit apps have',
      cards: [
        {
          icon: 'TrendingUp',
          title: 'Bigger addressable market',
          body: 'Not everyone wants to quit. But most smokers would like to smoke less. Reduction is the psychological stepping stone to quitting.',
        },
        {
          icon: 'RefreshCw',
          title: 'Solves the retention crisis',
          body: 'Quit apps have a binary outcome: you quit or you churn. Reduction means every resisted craving is a success. You win every single day.',
        },
        {
          icon: 'Target',
          title: '6-month subscription plans',
          body: 'Reduction is a journey, not a switch. Users commit to a 6-month plan to gradually reduce. No more month-1 churn.',
        },
        {
          icon: 'Mountain',
          title: 'A market of one',
          body: 'Every competitor focuses on quitting. SmokeLess would be the first major app positioned around gradual reduction.',
        },
      ],
      insight:
        '"70–80% of quitters relapse. But what if the goal was never to quit cold — but to reduce to the point where quitting becomes easy?"',
      insightAttr: '— Seedcraft strategic reframe',
    },

    appPreview: {
      label: 'The Product',
      title: 'Habit interruption meets ',
      titleAccent: 'gamified reduction',
      bodyTop:
        'The haptic press remains the hero. But now every press is a small victory in a longer journey. The app tracks your reduction over weeks and months — not binary days since quitting.',
      hapticLeaf: '🌿',
      hapticMessage: 'I don\'t smoke\nanymore',
      hapticHold: 'Hold to confirm',
      statsTop: { label: 'Time on plan', value: '5 Days 12 Hours' },
      statsGrid: [
        { label: 'Avoided', value: '110' },
        { label: 'Saved', value: '€75' },
      ],
      slipLabel: 'I slipped up ↻',
      featurePoints: [
        {
          title: 'The Haptic',
          body: 'Press and hold for 3 seconds. The phone vibrates. The ring fills. The craving passes. Zero cognitive load.',
        },
        {
          title: 'Reduction Plans',
          body: '6-month structured programs. Week by week, the app helps you reduce your target — no guilt, just progress.',
        },
        {
          title: 'Shame-Free Tracking',
          body: '"I slipped up" button treats lapses as data, not failure. Every day is a new chance. No streak resets.',
        },
        {
          title: 'Every Press Is a Win',
          body: 'Gamified progress tracking. Each resisted craving builds your score. Daily, weekly, monthly streaks without binary breakage.',
        },
      ],
    },

    branding: {
      label: 'Branding',
      title: 'The name says ',
      titleAccent: 'everything',
      readOneWayLabel: 'Read it one way',
      readOneWayName: 'Smoke Less',
      readOneWayTagline: 'Designed to make you smoke less',
      readOtherLabel: 'Read it another',
      readOtherName: 'Smokeless',
      readOtherTagline: 'Completely smoke-free',
      insight:
        '"Transforming the app from being one in millions of similar apps to one in a million."',
      insightAttr: '— Seedcraft brand strategy',
    },

    goToMarket: {
      label: 'Go-to-Market',
      title: 'The gift that ',
      titleAccent: 'actually helps',
      cardTitle: 'SmokeLess',
      cardBody: '6-month reduction plan.\nFor someone you love.',
      cardPrice: '€11.94',
      points: [
        {
          title: 'Smoker doesn\'t pay',
          body: 'No financial friction. No "just another thing I\'ll fail at." Someone cares enough to gift it.',
        },
        {
          title: 'Reciprocity drives retention',
          body: 'When someone gifts you a plan, you feel motivated to follow through. Social commitment beats willpower.',
        },
        {
          title: 'Revenue captured upfront',
          body: 'Even if the smoker never opens the app, the gifter has already paid. Zero-risk revenue.',
        },
      ],
    },

    revenue: {
      label: 'Revenue Model',
      title: 'Simple math, ',
      titleAccent: 'big upside',
      body: 'At €1.99/month with an average 3-month LTV of ~€6, even modest traction produces meaningful revenue. Low feature complexity means low maintenance cost.',
      scenarios: [
        {
          label: 'Scenario A — Modest',
          amount: '€300K',
          period: 'per year',
          detail: '50,000 users/year\n€1.99/mo × 3 months avg',
        },
        {
          label: 'Scenario B — Indie Success',
          amount: '€1.2M',
          period: 'per year',
          detail: '200,000 users/year\n€1.99/mo × 3 months avg',
          featured: true,
        },
        {
          label: 'Scenario C — Global',
          amount: '€6M',
          period: 'per year',
          detail: '1,000,000 users/year\n€1.99/mo × 3 months avg',
        },
      ],
      insight:
        '"Users cancelling after quitting is not a problem — it\'s proof of value. Relapsers re-subscribe later. Low feature complexity = low maintenance cost."',
      insightAttr: '— Revenue analysis note',
    },

    process: {
      label: 'The Seedcraft Process',
      title: 'What we build. What you ',
      titleAccent: 'receive.',
      steps: [
        {
          title: 'Validate & Research',
          body: "Market research, competitor analysis, positioning strategy. We've already started — the reduction pivot came from this phase.",
          value: 'Value: €2–5K',
        },
        {
          title: 'Build the MVP',
          body: 'Full prototype/MVP level build of SmokeLess. The haptic, the reduction plans, the shame-free tracking, the gift mechanism.',
          value: 'Value: €15–35K',
        },
        {
          title: 'Technical Audit',
          body: 'Ensure the product is production-ready, performant, and scalable for release.',
          value: 'Value: €2–5K',
        },
        {
          title: 'Launch with GTM',
          body: 'Go-to-market plans. App store optimization. Gift mechanic marketing. First user acquisition.',
          value: 'Value: €2–5K',
        },
        {
          title: 'MVP → MVP+1',
          body: 'Implement feedback from first users. Iterate the product from minimum viable to genuinely delightful.',
          value: 'Value: €5–10K',
        },
        {
          title: 'Find Acquisition Partners',
          body: 'Once we hit $10–30K MRR, we find the right team or acquirer to scale. Seedcraft retains 10% equity. You retain 50% of that 10%\'s future revenue.',
          value: 'Value: €10K',
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
      totalValue: '€36–70K',
      totalNote:
        'Equivalent to selling your idea at a €140K valuation — before it even launches.',
    },

    closing: {
      studioLabel: 'Seedcraft',
      projectLabel: 'SmokeLess',
      title: 'Let\'s build something ',
      titleAccent: 'worth breathing for.',
      subtitle: 'From one in millions to one in a million.',
      footerText: '© 2025 Seedcraft Ventures Ltd · Confidential',
    },
  },
}