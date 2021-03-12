import styled from 'styled-components'

export const CompletedChallenges = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props=> props.theme.grayClean};
  
  font-weight: 500;

  @media(max-width: 800px){
    margin: 0.50rem 0 1rem 0;
  }

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.75rem;
  }
`
