import {useContext} from 'react'
import {style} from '../../stylus'
import {challengesContext} from '../../contexts'
export const Profile = () => {

  const {level} = useContext(challengesContext)

  return (
    <div className={style.profile.profileContainer}>
      <img src="https://github.com/ArthurMaverick.png" alt="Arthur"/>
      <div>
          <strong>Arthur Santos</strong>
          <p>
            <img src="icons/level.svg" alt="level"/>  
             level {level}
          </p>
        </div>
      
    </div>
  )
}
