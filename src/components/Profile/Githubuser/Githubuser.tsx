import {Container} from './styles'
export const Githubuser = ({image, name, JoinName, level}) => {
  return (
    <Container>
    <img src={image}  alt={JoinName}/>
      
    <div>
      <strong>{name}</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>  
         level {level}
      </p>
    </div>
    </Container>
  )
}
