import Link from 'next/link'
import React from 'react'
import {Container} from './styles'

export const NameNotFound = () => {
  return (
    <Container>
      <img className="background" alt="name not found"/>
      <header>
        <div>
          <img src="icons/LogoBlack.png" alt="Logo"/>
        </div>
      </header>

      <main>
        <h1>Name not found</h1>
        <Link href='/' passHref>
          <button>
            Voltar
          </button>
        </Link>
      </main>
    </Container>
  )
}
