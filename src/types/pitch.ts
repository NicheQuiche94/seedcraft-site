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
  fontSerif: string   // Google Font name, e.g. "Instrument Serif"
  fontSans: string    // Google Font name, e.g. "DM Sans"
  fontSerifWeights?: string  // e.g. "ital@0;1" — appended to font URL
  fontSansWeights?: string   // e.g. "ital,opsz,wght@0,9..40,300;0,9..40,400"
}

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

export interface GiftPoint {
  title: string
  body: string
}

export interface AppPreviewStat {
  label: string
  value: string
}

// --- Section content types ---

export interface HeroContent {
  badge: string
  titleStart: string        // e.g. "Smoke"
  titleAccent: string       // e.g. "Less" — rendered in accent colour
  subtitle: string
  originatorName: string
  originatorRole: string
  studioRole: string
}

export interface MarketContent {
  label: string
  title: string
  titleAccent: string
  body: string
  stats: StatItem[]
}

export interface ProblemContent {
  label: string
  title: string
  titleAccent: string
  body: string
  cards: CardItem[]
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
}

export interface ShiftContent {
  label: string
  title: string
  titleAccent: string
  body: string
  old: ShiftItem
  new: ShiftItem
}

export interface WhyShiftContent {
  label: string
  title: string
  titleAccent: string
  cards: CardItem[]
  insight: string
  insightAttr: string
}

export interface AppPreviewContent {
  label: string
  title: string
  titleAccent: string
  bodyTop: string
  hapticLeaf: string
  hapticMessage: string
  hapticHold: string
  statsTop: AppPreviewStat
  statsGrid: AppPreviewStat[]
  slipLabel: string
  featurePoints: { title: string; body: string }[]
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
}

export interface GoToMarketContent {
  label: string
  title: string
  titleAccent: string
  cardTitle: string
  cardBody: string
  cardPrice: string
  points: GiftPoint[]
}

export interface RevenueContent {
  label: string
  title: string
  titleAccent: string
  body: string
  scenarios: RevenueScenario[]
  insight: string
  insightAttr: string
}

export interface ProcessContent {
  label: string
  title: string
  titleAccent: string
  steps: ProcessStep[]
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
}

export interface ClosingContent {
  studioLabel: string
  projectLabel: string
  title: string
  titleAccent: string
  subtitle: string
  footerText: string
}

// --- Top-level config ---

export interface PitchContent {
  hero: HeroContent
  market?: MarketContent
  problem?: ProblemContent
  originalIdea?: OriginalIdeaContent
  shift?: ShiftContent
  whyShift?: WhyShiftContent
  appPreview?: AppPreviewContent
  branding?: BrandingContent
  goToMarket?: GoToMarketContent
  revenue?: RevenueContent
  process?: ProcessContent
  deal?: DealContent
  closing: ClosingContent
}

export interface PitchConfig {
  slug: string
  envKey: string            // e.g. "PITCH_PASSWORD_SMOKELESS"
  theme: PitchTheme
  content: PitchContent
}