import styled from 'styled-components'




export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background:  ${props=> props.theme.blueDark} ;
  z-index: 10;
  
  


  header {
    color: ${props=> props.theme.white};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props=> props.theme.grayline};
    margin-top: 100px;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${props=> props.theme.white};
    margin: 1.5rem 0 1rem;
  }

  main p {
    line-height: 1.5;
    color: white;
  }

  footer {
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 300px;
  }

  footer button {
  height: 3rem;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  color: ${props=> props.theme.white};

  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9)
  }
}

`

export const ChallengeFailBtn = styled.button`
  background: ${props=> props.theme.red};
  margin: 0 10px;
`

export const ChallengeSuccededBtn = styled.button`
  background: ${props=> props.theme.green};
  margin: 0 10px;

`