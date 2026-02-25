import HapticMockup from './HapticMockup'
import type { PitchTheme } from '@/types/pitch'

export const smokelessMockups: Record<string, React.ComponentType<{ theme: PitchTheme }>> = {
  haptic: HapticMockup,
}