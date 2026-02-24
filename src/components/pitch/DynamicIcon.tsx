import {
  BarChart2, HeartCrack, BookOpen, DoorOpen,
  TrendingUp, RefreshCw, Target, Mountain,
  Gift, Sparkles, Lock, Feather, Users, Archive, ShieldOff, CalendarX,
  Network, Brain, ShieldCheck, Repeat,
} from 'lucide-react'
import type { PitchTheme } from '@/types/pitch'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  BarChart2, HeartCrack, BookOpen, DoorOpen,
  TrendingUp, RefreshCw, Target, Mountain,
  Gift, Sparkles, Lock, Feather, Users, Archive, ShieldOff, CalendarX,
  Network, Brain, ShieldCheck, Repeat,
}

interface Props { name: string; theme: PitchTheme; size?: number }

export default function DynamicIcon({ name, theme, size = 24 }: Props) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return (
    <div className="mb-4 p-2 rounded-lg inline-flex"
      style={{ background: theme.accentGlow }}>
      <Icon size={size} color={theme.accent} strokeWidth={1.5} />
    </div>
  )
}