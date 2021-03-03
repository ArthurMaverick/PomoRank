import { useContext } from 'react'
import {style} from '../../stylus'
import {challengesContext} from '../../contexts'

export const CompleteChallenges = () => {

  const {challengeCompleted} = useContext(challengesContext)
  
  return (
    <div className={style.Challenger.completedChallengers}>
      <span>Desafios completos</span>
      <span>{challengeCompleted ?? 0}</span>
    </div>
  )
}
