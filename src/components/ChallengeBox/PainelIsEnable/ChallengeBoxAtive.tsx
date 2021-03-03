import React from 'react'
import {style} from '../../../stylus'

interface ChallengeBoxAtiveProps {
  activeChallenge: {
    amount: number
    type: string
    description: string
  },
  handleChallengeFail(): void 
  handleChallengeSucceeded(): void
}

export const ChallengeBoxAtive = (
  {
    activeChallenge,
    handleChallengeFail,
    handleChallengeSucceeded
  }:ChallengeBoxAtiveProps) => {

  return (
    <div className={style.ChallengeBox.challengeActive}>
      <header>Ganhe {activeChallenge.amount} xp</header>
      <main>
        <img src="icons/body.svg" alt={`icon/${activeChallenge.type}`}/>
        <strong>novo Desafio</strong>
        <p>{activeChallenge.description}</p>
      </main>

      <footer>
      <button 
        type="button"
        className={style.ChallengeBox.challengeFailBtn}
        onClick={handleChallengeFail}
      > 
        Falhei
      </button>

      <button 
        type="button"
        className={style.ChallengeBox.challengeSuccededBtn}
        onClick={handleChallengeSucceeded}             
      > 
        Completei
      </button>
      </footer>
    </div>
  )
}
