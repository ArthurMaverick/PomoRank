import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ChallengeBox, CompleteChallenges, CountDown, ExperienceBar, Profile } from '../components'
import { CountdownProvider, Challengeprovider } from '../contexts'
import { style } from '../stylus'

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

    <div className={style.pageHome.container}>
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
    </div>
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