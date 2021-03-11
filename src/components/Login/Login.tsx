import {Container} from './styles'
import {SingIn} from './SingIn'
import {SignOut} from './SingOut'



export const LoginPage = ({session, signIn, signOut}) => {
  return (
    <Container>
      {!session 
        ?<SingIn  signIn={signIn}/> 
        :<SignOut signOut={signOut}/>    
      }
    </Container>
  )
}
