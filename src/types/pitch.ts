import type React from 'react'

// ─── Theme ────────────────────────────────────────────────────────────────────

export interface PitchTheme {
  accent: string
  accentDim: string
  accentGlow: string
  accentGlowStrong: string
  bg: string
  bgCard: string
  bgCardAlt: string
  text: string
  textMuted: string
  border: string
  fontSerif: string
  fontSans: string
  fontSerifWeights?: string
  fontSansWeights?: string
  // Optional extras for projects with richer palettes
  fontHandwriting?: string
  fontHandwritingWeights?: string
  secondaryAccent?: string       // e.g. "#FFD93D" warm yellow
  secondaryAccentLight?: string  // e.g. "#FFF8DB"
  bgWarm?: string                // e.g. "#F7F5F0" warm card variant
}

// ─── Shared primitives ────────────────────────────────────────────────────────

export interface StatItem {
  number: string
  label: string
}

export interface CardItem {
  icon: string
  title: string
  body: string
}

export interface ComparisonRow {
  feature: string
  them: string
  us: string
}

export interface ShiftItem {
  title: string
  body: string
}

export interface RevenueScenario {
  label: string
  amount: string
  period: string
  detail: string
  featured?: boolean
}

export interface ProcessStep {
  title: string
  body: string
  value: string
}

export interface DealItem {
  text: string
}

export interface HandwrittenCallout {
  text: string
  rotation?: number  // degrees, e.g. -2 or 1.5
  color?: string     // defaults to theme.accent
}

// ─── Section content types ────────────────────────────────────────────────────

export interface HeroContent {
  badge: string
  titleStart: string
  titleAccent: string
  subtitle: string
  originatorName: string
  originatorRole: string
  studioRole: string
  handwrittenNote?: HandwrittenCallout
}

export interface MarketContent {
  label: string
  title: string
  titleAccent: string
  body: string
  stats: StatItem[]
  handwrittenNote?: HandwrittenCallout
}

export interface ProblemContent {
  label: string
  title: string
  titleAccent: string
  body: string
  cards: CardItem[]
  handwrittenNote?: HandwrittenCallout
}

export interface OriginalIdeaContent {
  label: string
  title: string
  titleAccent: string
  body: string
  comparisonThemLabel: string
  comparisonUsLabel: string
  rows: ComparisonRow[]
  insight: string
  insightAttr: string
  handwrittenNote?: HandwrittenCallout
}

export interface ShiftContent {
  label: string
  title: string
  titleAccent: string
  body: string
  old: ShiftItem
  new: ShiftItem
  handwrittenNote?: HandwrittenCallout
}

export interface WhyShiftContent {
  label: string
  title: string
  titleAccent: string
  cards: CardItem[]
  insight: string
  insightAttr: string
  handwrittenNote?: HandwrittenCallout
}

// Escapage-style deep pillars with detail text
export interface PillarItem {
  icon: string
  title: string
  body: string        // supports multiple paragraphs — split on "\n\n"
  detail: string      // italic callout at the bottom
}

export interface PillarsContent {
  label: string
  title: string
  titleAccent: string
  subtitle?: string
  pillars: PillarItem[]
  handwrittenNote?: HandwrittenCallout
}

// Mockups row — project supplies its own component map via PitchConfig
export interface MockupItem {
  label: string
  sublabel: string
  handwrittenNote?: HandwrittenCallout
  component: string   // key into PitchConfig.mockupComponents
}

export interface MockupsContent {
  label: string
  title: string
  titleAccent: string
  items: MockupItem[]
  handwrittenNote?: HandwrittenCallout
}

// Product modes (Escapage-style: Solo / Circle / Play)
export interface ModeItem {
  icon: string
  title: string
  tag: string
  body: string
  origin: "founder" | "seedcraft"
}

export interface ModesContent {
  label: string
  title: string
  titleAccent: string
  subtitle?: string
  modes: ModeItem[]
  handwrittenNote?: HandwrittenCallout
}

// Idea attribution — founder features vs Seedcraft additions
export interface AttributionItem {
  title: string
  body: string
  origin: "founder" | "seedcraft"
}

export interface AttributionContent {
  label: string
  title: string
  titleAccent: string
  subtitle?: string
  founderSectionLabel: string
  seedcraftSectionLabel: string
  items: AttributionItem[]
  handwrittenNote?: HandwrittenCallout
}

// Build summary — OG vs NEW rows
export interface BuildSummaryContent {
  label: string
  title: string
  ogLabel: string
  ogItems: string
  newLabel: string
  newItems: string
  handwrittenNote?: HandwrittenCallout
}

export interface BrandingContent {
  label: string
  title: string
  titleAccent: string
  readOneWayLabel: string
  readOneWayName: string
  readOneWayTagline: string
  readOtherLabel: string
  readOtherName: string
  readOtherTagline: string
  insight: string
  insightAttr: string
  handwrittenNote?: HandwrittenCallout
}

export interface GoToMarketContent {
  label: string
  title: string
  titleAccent: string
  cardTitle: string
  cardBody: string
  cardPrice: string
  points: { title: string; body: string }[]
  handwrittenNote?: HandwrittenCallout
}

export interface RevenueContent {
  label: string
  title: string
  titleAccent: string
  body: string
  scenarios: RevenueScenario[]
  insight: string
  insightAttr: string
  handwrittenNote?: HandwrittenCallout
}

export interface ProcessContent {
  label: string
  title: string
  titleAccent: string
  steps: ProcessStep[]
  handwrittenNote?: HandwrittenCallout
}

export interface DealContent {
  label: string
  headline: string
  headlineAccent: string
  subheading: string
  items: DealItem[]
  totalLabel: string
  totalValue: string
  totalNote: string
  // Optional IP ownership detail block (Escapage has this, SmokeLess doesn't)
  ipStructure?: {
    title: string
    body: string  // supports "\n\n" paragraph splits
  }
  handwrittenNote?: HandwrittenCallout
}

// Guest co-founder role section (Escapage-specific but reusable)
export interface RoleItem {
  title: string
  body: string
}

export interface RoleContent {
  label: string
  title: string
  titleAccent: string
  subtitle?: string
  roles: RoleItem[]
  ctaTitle?: string
  ctaBody?: string
  ctaEmail?: string
  handwrittenNote?: HandwrittenCallout
}

export interface ClosingContent {
  studioLabel: string
  projectLabel: string
  title: string
  titleAccent: string
  subtitle: string
  footerText: string
}

// ─── Top-level config ─────────────────────────────────────────────────────────

export interface PitchContent {
  hero: HeroContent
  market?: MarketContent
  problem?: ProblemContent
  originalIdea?: OriginalIdeaContent
  shift?: ShiftContent
  whyShift?: WhyShiftContent
  pillars?: PillarsContent
  mockups?: MockupsContent
  modes?: ModesContent
  attribution?: AttributionContent
  buildSummary?: BuildSummaryContent
  branding?: BrandingContent
  goToMarket?: GoToMarketContent
  revenue?: RevenueContent
  process?: ProcessContent
  deal?: DealContent
  role?: RoleContent
  closing: ClosingContent
}

export interface PitchConfig {
  slug: string
  envKey: string
  theme: PitchTheme
  content: PitchContent
  // Project-specific mockup component registry
  mockupComponents?: Record<string, React.ComponentType<{ theme: PitchTheme }>>
}