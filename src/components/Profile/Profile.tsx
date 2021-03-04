import {useContext} from 'react'
import {ProfileContainer} from './styles'
import {challengesContext} from '../../contexts'
export const Profile = () => {

  const {level} = useContext(challengesContext)

  return (
    <ProfileContainer>
      <img src="https://github.com/ArthurMaverick.png" alt="Arthur"/>
      <div>
          <strong>Arthur Santos</strong>
          <p>
            <img src="icons/level.svg" alt="level"/>  
             level {level}
          </p>
        </div>
      
    </ProfileContainer>
  )
}
