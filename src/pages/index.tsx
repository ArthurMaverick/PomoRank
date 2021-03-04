import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ChallengeBox, CompleteChallenges, CountDown, ExperienceBar, Profile } from '../components'
import { CountdownProvider, Challengeprovider } from '../contexts'
import {ContainerHomePage} from '../components/view'

interface CookiesBrowserProps {
  level: number
  currentExperience: number
  challengeCompleted: number
}

export default function Home({ 
  level, 
  currentExperience, 
  challengeCompleted}:CookiesBrowserProps) {

  return (
  <Challengeprovider 
    level={level} 
    currentExperience={currentExperience} 
    challengeCompleted={challengeCompleted}
  >

    <ContainerHomePage>
        <Head>
          <title>inicio  | Moveit</title>
        </Head>
        
        <ExperienceBar/>

      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompleteChallenges/>
            <CountDown/>
          </div>
            <ChallengeBox/>
          <div>
          </div>
        </section>
      </CountdownProvider>
    </ContainerHomePage>
  </Challengeprovider>

  )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
  const {level, currentExperience, challengeCompleted} = context.req.cookies
  
  return {
    props: {
      level: Number(level) ,
      currentExperience: Number( currentExperience) , 
      challengeCompleted: Number (challengeCompleted) 
    }
    
  }
}