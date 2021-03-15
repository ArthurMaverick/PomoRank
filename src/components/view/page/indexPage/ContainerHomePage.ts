import styled from 'styled-components'

export const ContainerHomePage = styled.section`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 0.2rem 1rem;


  section {
  display: grid;
  grid-template-columns: 104px 1fr 1fr;
  grid-template-rows: 115px  1fr ;
  grid-template-areas:
  'menubar . .'
  'menubar leftSide rigthSide';
  gap: 6.25rem;
  align-content: center;

  div.timerAndProfile {
      grid-area: leftSide;
    }

    div.challengerBox {
      grid-area: rigthSide;
    }

    div.footer {
      grid-area: menubar;
    }    
  
  @media(max-width: 800px) {
    /* height: 98vh; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64vh 20vh 7vh;
    grid-template-areas:
    'leftSide'
    'rigthSide'
    'menubar';
    /* flex: 1; */
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    row-gap: 1px;
    align-content: center;

    div.challengerBox {
      /* padding: 0; */
      display: flex;
      justify-content: center;

    }
  }
}

  


  
`



