// import {signin } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { SingInContainer } from './styles'



export const SingIn = ({signIn}) => {
  const [username, setUsername] = useState('')
  // const [newUser, setNewuser] = useState('')

  function removespaces (value: string) {
    if(!value) return ''
    const removeSpace = value.replaceAll(' ', '')
    return removeSpace
  }
 //TODO change this url to prod
  const redirect = {
      callbackUrl: 'https://pomo-rank.vercel.app/dashboard',
  }


  return (
    <SingInContainer>
      <header className='menu'>
          <nav>
            <ul>
              <li>
                <button 
                onClick={()=> signIn('github', redirect)}>Sign in</button>
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
             <div>
              <h1>Bem-vindo</h1>
              <div className="login_text">
                <img src="icons/GithubBlack.png" alt="Github"/>
                <p>Faça login com seu Github
                para começar</p>
              </div>
                <div className="formulario">

                  <div className="nowrap">
                      <input 
                        type='text' 
                        placeholder="Digite seu username" 
                        autoFocus
                        value={username}
                        onChange={e=>setUsername(e.target.value)}
                        
                      />           
                      <Link
                        href={{
                            pathname: '/dashboardGithub',
                            query: { name: removespaces(username) },
                        }}
                        >
                        <button 
                            disabled={!username}>
                            <img src="icons/Vector.png" alt="Seta"/>
                          </button>
                      </Link>
                      
                  </div>
                  
                    <div className="newuser">
                      <h2>Quero Experimentar</h2> 
                        <Link href={{
                          pathname: '/dashboardGithub'  
                        }}>
                        <button className="newuserBtn">Entrar</button>
                      </Link>
                    </div>
                            
                </div>
                    
                </div>
            </div>
        </main>
    </SingInContainer>
  )
}
