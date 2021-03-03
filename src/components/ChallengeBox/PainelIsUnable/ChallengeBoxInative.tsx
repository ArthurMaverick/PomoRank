import {style} from '../../../stylus'

export const ChallengeBoxInative = () => {
  return (
    <div className={style.ChallengeBox.challengeisNotActive}>
    <strong>
      Finalize um ciclo para receber desafios
    </strong>
    <p>
      <img src="icons/level-up.svg" alt="Level Up"/>
      Avance de level completando desafios
    </p>
  </div>
  )
}
