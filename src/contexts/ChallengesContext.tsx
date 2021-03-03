import { createContext, ReactNode, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal/LevelUpModal'


interface ChallendesContextData {
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
interface ChallengeProviderProps {
  children: ReactNode,
  level: number
  currentExperience: number
  challengeCompleted: number
}

export const challengesContext = createContext({} as ChallendesContextData)

export function Challengeprovider({children,...rest}:ChallengeProviderProps) {
  
  const [level, setLevel]  = useState<number>(rest.level ?? 1)
  const [currentExperience, setCurrentExperience]  = useState<number>(rest.currentExperience ?? 0)
  const [challengeCompleted, setChallengeCompleted]  = useState<number>(rest.challengeCompleted ?? 0)
  const [activeChallenge, setActiveChallenge]  = useState(null)
  const [IsLevelUpModalopen, setIsLevelUpModalopen] = useState(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, []);


  useEffect(() => {
    Cookies.set('level', level as unknown as string)
    Cookies.set('currentExperience', currentExperience as unknown as string)
    Cookies.set('challengeCompleted', challengeCompleted as unknown as string)
  }, [level, currentExperience, challengeCompleted]);

  function levelUp(): void{
    setLevel(level + 1)
    setIsLevelUpModalopen(true)
  }
  function closeLevelUpModal(){
    setIsLevelUpModalopen(false)
  }
  function startNewChallenge() {
    const randomChalengeIndex = Math.floor( Math.random() * challenges.length)
    const challenge = challenges[randomChalengeIndex]
    
    setActiveChallenge(challenge)

    new Audio('./notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount} XP`
      })
    }

  }
  function resetChallenge() {
    setActiveChallenge(null)
  }
  function completedChallenge() {
    if(!activeChallenge) {
      return
    }
    const {amount} = activeChallenge
    let finalExperience:number = currentExperience + amount

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience  - experienceToNextLevel
      levelUp()
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengeCompleted(curr => curr + 1)
  }


  return (
    <challengesContext.Provider value={
      {
        level, 
        currentExperience, 
        challengeCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completedChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      {IsLevelUpModalopen && <LevelUpModal/>}
    </challengesContext.Provider>
  )
}