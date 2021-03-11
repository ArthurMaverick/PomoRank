import { signIn, signOut, useSession } from 'next-auth/client'
import {LoginPage} from '../components'

export default function Login() {
  const [session, loading] = useSession()
  
  
  return ( 

    <LoginPage session={session} signIn={signIn} signOut={signOut}/>
  )
  
}


