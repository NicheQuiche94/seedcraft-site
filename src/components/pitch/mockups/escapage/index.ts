import ArchiveMockup from './ArchiveMockup'
import AiProofMockup from './AiProofMockup'
import VocabMockup from './VocabMockup'
import type { PitchTheme } from '@/types/pitch'

export const escapageMockups: Record<string, React.ComponentType<{ theme: PitchTheme }>> = {
  archive: ArchiveMockup,
  aiProof: AiProofMockup,
  vocabGame: VocabMockup,
}