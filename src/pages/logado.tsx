import { useSession } from 'next-auth/client'

export default function Logado () {
  const [ session, loading ] = useSession()

  return (
    <h1>
      Logado com {session.user.name} : {session.user.email}
    </h1>
  )
}
