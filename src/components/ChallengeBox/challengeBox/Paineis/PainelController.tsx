import React from 'react'
import {ChallengeBoxAtive} from './PainelIsEnable'
import {ChallengeBoxInative} from './PainelIsUnable'



export const Box = {
  Enable: ({activeChallenge,handleChallengeFail,handleChallengeSucceeded}) => {
    return (
      <ChallengeBoxAtive
        activeChallenge={activeChallenge}
        handleChallengeFail={handleChallengeFail}
        handleChallengeSucceeded={handleChallengeSucceeded}
      />
    )
  },
  Unable: () => {
    return (
      <ChallengeBoxInative/>
    )
  }

} 