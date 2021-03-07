import {useContext} from 'react'
import {ProfileContainer} from './styles'
import {challengesContext} from '../../contexts'
export const Profile = ({name}) => {
  const {level} = useContext(challengesContext)
  const JoinName = name.replace(' ', '')



  return (
    <ProfileContainer>
      <img src={`https://github.com/${JoinName}.png`} alt="Arthur"/>
      <div>
          <strong>{name}</strong>
          <p>
            <img src="icons/level.svg" alt="level"/>  
             level {level}
          </p>
        </div>
      
    </ProfileContainer>
  )
}
