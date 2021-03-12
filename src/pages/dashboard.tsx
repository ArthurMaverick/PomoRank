//next
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSession, useSession } from 'next-auth/client'
//components
import { ChallengeBox, CompleteChallenges, CountDown, ExperienceBar, Profile, Custom, MenuBar } from '../components'
import { ContainerHomePage } from '../components/view'
//contexts
import { Challengeprovider, CountdownProvider } from '../contexts'
//interfaces
import {CookiesBrowserProps} from '../Rules'
//utils
import {Fetch} from '../util'

export default function DashBoard({ 
  level, 
  currentExperience, 
  challengeCompleted,
  json
  }:CookiesBrowserProps) {
  const [session, loading] = useSession()

  

  if(typeof window !== 'undefined' && loading) return  null
  
  if(!session) return <Custom/>
     
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
              <div className='timerAndProfile'>
                <Profile name={session?.user.name} image={json.avatar_url}/>
                <CompleteChallenges/>
                <CountDown/>
              </div>
              <div className='challengerBox'>
                <ChallengeBox/>
              </div>
              <div className="footer">
                 <MenuBar/>
              </div>
            </section>
          </CountdownProvider>
        </ContainerHomePage>
   </Challengeprovider>
   )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
  const session = await getSession(context)
  const joinName = session?.user?.name.replace(' ', '')
  const json = await Fetch(`https://api.github.com/users/${joinName}`)
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