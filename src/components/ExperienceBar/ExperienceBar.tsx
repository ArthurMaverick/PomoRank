import { useContext } from 'react';
import {challengesContext} from '../../contexts'
import {ExperienceBarUi} from './styles'


export const ExperienceBar = () => {
  const {currentExperience, experienceToNextLevel} = useContext(challengesContext)
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <ExperienceBarUi percentToNextLevel={percentToNextLevel} >
      <span>0 xp</span>
      <div>
        <div/>
        
        <span className='currentExperience'>
          {currentExperience}xp
        </span>
        
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarUi>
  );
}


  