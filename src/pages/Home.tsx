import { signIn, signOut, useSession } from 'next-auth/client'


export default function Home() {
  const [session, loading] = useSession()
  const dataUser = {
    email: 'arthur_acs@hotmail.com',
    senha: 'Acs2228@tt7',
    redirect: true

  }

  return ( 
  <> 
    {!session && 
      <>
        Not signed in <br/>
        <button onClick={() => signIn( 'github' ,dataUser, )}>Sign in</button>
      </>
    }
    
    {session && 
      <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }

  </>

  )
  
    
}



// if(session) {
  //   return <p>logado como {session.user.email}</p>
  // }
  // return <a href="/api/auth/signin" target="_blanck">sing in</a>
