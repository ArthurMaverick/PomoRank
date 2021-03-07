// import {signin } from 'next-auth/client'
import React from 'react'
import {SingInContainer} from './styles'




export const SingIn = ({signIn}) => {
  return (
    <SingInContainer>
      <header>
          <nav>
            <ul>
              <li>
                <button onClick={()=> signIn()}>Sign in</button>
              </li>
            </ul>
          </nav>
        </header>
         
        <main>
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
                  <div>
                    <input type='text' placeholder="Digite seu username" autoFocus/>
                  </div>
                  <div>
                    <button><img src="icons/Vector.png" alt="Seta"/></button>
                  </div>
                </div>
            </div>
          </div>
        </main>
    </SingInContainer>
  )
}
