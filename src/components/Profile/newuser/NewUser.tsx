import {Container} from './styles'

export const NewUser = ({level}) => {
  return (
    <Container>
      
    <div>
      <img src='icons/Github.png'  alt='newUser'/>
      <strong>New User</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>  
         level {level}
      </p>
    </div>
    </Container>
  )
}
