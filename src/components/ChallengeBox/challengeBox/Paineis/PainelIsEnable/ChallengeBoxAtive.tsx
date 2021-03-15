// TODO this is a modal

import React from 'react'
import {ChallengeActive,  ChallengeFailBtn,ChallengeSuccededBtn} from './styles'

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
    <ChallengeActive>
      
      <header>Ganhe {activeChallenge.amount} xp</header>
      <main>
        <img src="icons/body.svg" alt={`icon/${activeChallenge.type}`}/>
        <strong>novo Desafio</strong>
        <p>{activeChallenge.description}</p>
      </main>

      <footer>
        <ChallengeFailBtn 
          type="button"
          onClick={handleChallengeFail}
        > 
          Falhei
        </ChallengeFailBtn>

        <ChallengeSuccededBtn 
          type="button"
          onClick={handleChallengeSucceeded}             
        > 
          Completei
        </ChallengeSuccededBtn>
      </footer>
    </ChallengeActive>
  )
}
