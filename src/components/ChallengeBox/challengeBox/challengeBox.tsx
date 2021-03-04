import { useContext } from 'react';
import { challengesContext, CountdownContext } from '../../../contexts';
import {ChallengeBoxInative } from './PainelIsUnable'
import {ChallengeBoxAtive} from './PainelIsEnable'
import {ChallengeBoxContainer} from './styles'

export const ChallengeBox = () => {
  const {activeChallenge, resetChallenge, completedChallenge } = useContext(challengesContext);
  const {resetTimer,setIsActive,countdownTimeout,setTime, setHasFinished} = useContext(CountdownContext);
    
    function handleChallengeSucceeded (){
      completedChallenge()
      resetTimer(setIsActive,setTime,countdownTimeout,setHasFinished)

    }
    function handleChallengeFail (){
      resetChallenge()
      resetTimer(setIsActive,setTime,countdownTimeout, setHasFinished)
    }
  
  return (
    <ChallengeBoxContainer>
      { activeChallenge
        
        ? (
            <ChallengeBoxAtive 
              activeChallenge={activeChallenge}
              handleChallengeFail={handleChallengeFail}
              handleChallengeSucceeded={handleChallengeSucceeded} 
            />
          ) 
        : ( <ChallengeBoxInative/> ) 
      }
    </ChallengeBoxContainer>
  )
}


