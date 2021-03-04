import Link from 'next/link'
import React from 'react'
import {Container} from './styles'


export const LoginPage = ({session, signIn, signOut}) => {
  return (
    <Container>
       {!session && 
      <>
        Not signed in <br/>
        <button onClick={()=>signIn()}>singIn</button>
      </>
    }
    
    {session && 
      <>
        Signed in as {session.user.name} <br/>
        <button>
         <Link href='/secret'>to the secret page</Link> 
        </button>
        
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }
    </Container>
  )
}
