import styled from 'styled-components'

export const ContainerHomePage = styled.section`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 0.2rem 1rem;

  
  
  section {
    display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 10vh 1fr;
  grid-template-areas:
  'experiencebar experiencebar '
  'leftSide   rigthSide';
    gap: 6.25rem;
    align-content: center;

    div.timerAndProfile {
      grid-area: leftSide;
    }

    div.challengerBox {
      grid-area: rigthSide;
    }

  }
  

  /* display: flex;
  flex-direction: column; */

  @media(max-width: 800px) {
  
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 1fr;
    grid-template-areas:
    'experiencebar'
    'leftSide'
    'rigthSide';
    /* flex: 1; */
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    row-gap: 0.25rem;
    align-content: center;

    div.timerAndProfile {
      grid-area: leftSide;
    }

    div.challengerBox {
      grid-area: rigthSide;
    }

  }

}

  
`



