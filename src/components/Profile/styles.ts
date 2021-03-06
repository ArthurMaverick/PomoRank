import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  & div > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

 div > div {
    margin-left: 1.5rem;
  }

  div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props=> props.theme.title};
  }

  div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  div p img {
    margin-right: 0.5rem;
  }

  @media(max-width:800px) {
  justify-content: center;
  align-items: center;

  }
`
