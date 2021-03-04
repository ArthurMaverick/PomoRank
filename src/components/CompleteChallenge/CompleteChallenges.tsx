import { useContext } from 'react'
import {CompletedChallenges} from './styles'
import {challengesContext} from '../../contexts'

export const CompleteChallenges = () => {

  const {challengeCompleted} = useContext(challengesContext)
  
  return (
    <CompletedChallenges>
      <span>Desafios completos</span>
      <span>{challengeCompleted ?? 0}</span>
    </CompletedChallenges>
  )
}
