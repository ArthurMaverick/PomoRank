import Head from 'next/head'
import { GetServerSideProps} from 'next'
//components
import {ContainerHomePage} from '../components/view'
import { 
  ChallengeBox, 
  CompleteChallenges, 
  CountDown, 
  ExperienceBar, 
  Profile, 
  NameNotFound, MenuBar} from '../components'
//contexts
import { CountdownProvider, Challengeprovider } from '../contexts'
//interfaces
import {GithubProps}from '../Rules'
//utils
import {Fetch} from '../util'


export default function DashBoardGithub({ json }:GithubProps  ) {

  return (
    <Challengeprovider >
 
     <ContainerHomePage>
        <Head> 
          <title>{json?.name + ' | ' + 'Movit'}</title>
        </Head>
         
        <ExperienceBar/>
         
 
      <CountdownProvider>
        <section>
          
          <div className="timerAndProfile">
            <Profile name={json?.name} image={json?.avatar_url}/>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const GithubQuery = context.query.name
  if(!GithubQuery) {
    return {
      props: {error: null}
    }
  }
  const json = await Fetch(`https://api.github.com/users/${GithubQuery}`)
  console.log(json);
  return {
      props: {
        json,
      }
}
}