import styled from 'styled-components'

export const ChallengeBoxContainer = styled.div`


  height:  100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;

  @media(max-width: 800px) {
    padding: 0;
  }

` 