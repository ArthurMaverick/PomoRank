import { signIn, signOut, useSession } from 'next-auth/client'
import {LoginPage} from '../components'
export default function Login() {
  const [session, loading] = useSession()
  

  return ( 

    <LoginPage session={session} signIn={signIn} signOut={signOut}/>
  )
  
    
}



// if(session) {
  //   return <p>logado como {session.user.email}</p>
  // }
  // return <a href="/api/auth/signin" target="_blanck">sing in</a>
