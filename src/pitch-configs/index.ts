import { smokeless } from './smokeless'
import { escapage } from './escapage'
import type { PitchConfig } from '@/types/pitch'

const configs: Record<string, PitchConfig> = {
  smokeless,
  escapage,  
}

export function getPitchConfig(slug: string): PitchConfig | null {
  return configs[slug] ?? null
}