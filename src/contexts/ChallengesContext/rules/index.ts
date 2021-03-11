import { ReactNode } from "react";

export interface ChallengeProviderProps {
  children: ReactNode,
  level?: number
  currentExperience?: number
  challengeCompleted?: number
}

export interface ChallendesContextData {
  level: number
  currentExperience: number
  challengeCompleted: number
  activeChallenge: ChalengesProps
  experienceToNextLevel: number
  levelUp(): void
  startNewChallenge(): void
  resetChallenge():void
  completedChallenge(): void
  closeLevelUpModal(): void
}


interface ChalengesProps {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

