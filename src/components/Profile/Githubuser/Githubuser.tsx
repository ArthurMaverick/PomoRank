
export const Githubuser = ({image, name, JoinName, level}) => {
  return (
    <>
    <img src={image}  alt={JoinName}/>
      
    <div>
      <strong>{name}</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>  
         level {level}
      </p>
    </div>
    </>
  )
}
