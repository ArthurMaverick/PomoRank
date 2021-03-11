import { useContext } from 'react';
import { challengesContext, CountdownContext } from '../../../contexts';
import {Box} from './Paineis'
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
        ? <Box.Enable 
            activeChallenge={activeChallenge}
            handleChallengeFail={handleChallengeFail}
            handleChallengeSucceeded={handleChallengeSucceeded} 
          />
        : <Box.Unable/>  
      }
    </ChallengeBoxContainer>
  )
}


