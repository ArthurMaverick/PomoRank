import { useContext } from 'react';
import {style} from '../../stylus'
import {challengesContext} from '../../contexts'

export const ExperienceBar = () => {
  const {currentExperience, experienceToNextLevel} = useContext(challengesContext)
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={style.experience.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel ?? 0}%` }}/>
        
        <span 
          className={style.experience.currentExperience} 
          style={{left: `${percentToNextLevel ?? 0}%`}}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}


  