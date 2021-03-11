import { useContext } from 'react'
import { challengesContext } from '../../contexts'
import { Githubuser } from './Githubuser'
import { NewUser } from './newuser'
import { ProfileContainer } from './styles'

interface ProfileProps {
  name: string
  image: string
}

export const Profile = ({name, image}: ProfileProps) => {
  const {level} = useContext(challengesContext)
  const JoinName = name?.replace(' ', '')

  return (
    <ProfileContainer>
        { name
          ?<Githubuser 
            name={name} 
            image={image}   
            JoinName={JoinName}  
            level={level}  />
          :<NewUser level={level}/>
        }
    </ProfileContainer>
      )
}
