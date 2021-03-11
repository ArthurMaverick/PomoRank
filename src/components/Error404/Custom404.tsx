import Link from 'next/link'
import React from 'react'
import {Container} from './styles'


export const Custom = () => {
  return (
    <Container>
        <img className='tmt'  alt="tomato"/>
      <header>
      <Link href='/' passHref>
        <img src="icons/LogoBlack.png" alt="Logo"/>
      </Link>

      </header>

      <section>
        <h1>404</h1>
        <h2>Pagina nao encontrada...</h2>
        <Link href='/' passHref>
        <button>
        Voltar a home
        </button>
        </Link>
      </section>
    </Container>
  )
}
