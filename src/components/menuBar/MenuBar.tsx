import Link from 'next/link'
import React from 'react'
import {Container} from './styles'
export const MenuBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/ranking" passHref>
            <button className='btn_ranking'>
              <img src="icons/award3.svg" alt="award"/>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <button className='btn_main'>
              <img src="icons/homeWhite.svg" alt="home"/>
            </button>
          </Link>
        </li>
       
      </ul>
    </Container>
  )
}

// TODO PASSAR AS ROTAS NOS LINKS
