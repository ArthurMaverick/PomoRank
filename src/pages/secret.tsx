import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/client'

export default function Secret () {
  const [session, loading] = useSession()
  const [content, setContent] = useState<object>()

  useEffect(()=>{
    const fetchData = async(): Promise<void> => {
      const res = await fetch('/api/auth/secret')
      const json = await res.json()
      
      if(json.content){
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  if(typeof window !== 'undefined' && loading) {
    return null
  }
  if(!session) {
    return (
      <main>
        <div>
          <h1>
            you aren't signed in, please sign in first.
          </h1>
        </div>
      </main>
    )
  }
  return (
    <div>
      <h1>protect Page</h1>
      <p>{content}</p>
      <p>{session.user.email}</p>
      <p>{session.user.name}</p>
      {/* <img src={session.user.image} alt={session.user.name}/> */}
    </div>
  )

  
}
