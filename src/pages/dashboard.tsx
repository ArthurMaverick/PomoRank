//next
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps} from 'next'
import { getSession, useSession } from 'next-auth/client'
//components
import { CountdownProvider, Challengeprovider } from '../contexts'
import {ContainerHomePage} from '../components/view'
import { ChallengeBox, CompleteChallenges, CountDown, ExperienceBar, Profile } from '../components'
//interfaces
import {Github} from '../util'

interface CookiesBrowserProps {
  level: number
  currentExperience: number
  challengeCompleted: number
  json: Github | null
}

export default function Home({ 
  level, 
  currentExperience, 
  challengeCompleted,
  json
  }:CookiesBrowserProps) {
  const [session, loading] = useSession()
  

  if(typeof window !== 'undefined' && loading) {
    return null
  }

  if(!session) {
    return (
      <main>
        <div>
          <h1>
            voce se perdeu? 
          </h1>
            <Link href='/'>Volta para o inicio</Link>
        </div>
      </main>
    )
  }

  return (
      

      <Challengeprovider 
        level={level} 
        currentExperience={currentExperience} 
        challengeCompleted={challengeCompleted}
      >

    <ContainerHomePage>
        <Head> 
          <title>{session.user.name +' | ' + 'Movit'}</title>
        </Head>
        
        <ExperienceBar/>
        

      <CountdownProvider>
        <section>
          <div>
            <Profile name={session?.user.name} />
            <CompleteChallenges/>
            <CountDown/>
          </div>
            <ChallengeBox/>
          <div>
          </div>
        </section>
      </CountdownProvider>
      <h1>{json.login || 'oi'}</h1>
    </ContainerHomePage>
  </Challengeprovider>

  )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
  const session = await getSession(context)
  
  const joinName = session?.user?.name.replace(' ', '')
  const data = await fetch(`https://api.github.com/users/${joinName}`)
  const json = await data.json()
  console.log(json);

  const {level, currentExperience, challengeCompleted} = context.req.cookies
 
  
  return {
    props: {
      level: Number(level) ,
      currentExperience: Number( currentExperience) , 
      challengeCompleted: Number (challengeCompleted),
      json
    }
    
  }
}