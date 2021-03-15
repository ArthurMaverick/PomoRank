import styled from 'styled-components'

export const ChallengeisNotActive = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 800px) {
      display: flex;
      justify-content: center;
    }

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    @media(max-width: 800px) {
      display: none;
    }
  }

  p {
    display: flex; 
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
    @media(max-width: 800px) {
      margin-top: 0rem;
      display: flex; 
      flex-direction: row;
    }

  }

  p img {
    margin-bottom: 1rem;
    @media(max-width: 800px) {
      width:23%;
      
    }
  }
`