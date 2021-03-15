// import {signin } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import {SingOutContainer} from './styles'




export const SignOut = ({signOut}) => {
  return (
    <SingOutContainer>
      <header className='menu'>
          <nav>
            <ul>
              <li>
                <button><Link href='/dashboard'>Dashboard</Link></button>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </nav>
        </header>
         
        <main className='hero'>
          <div className="capa">
              <img  src="icons/Simbolo.png" alt="capa"/>
          </div>

           <div className="form">
            <div className="logo">
              <img  src="icons/LogoBlack.png" alt="logo"/>
            </div>
            
            
          </div>
        </main>
    </SingOutContainer>
  )
}
