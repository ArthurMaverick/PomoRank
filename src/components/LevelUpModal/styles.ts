import styled from 'styled-components'

export const Overlay = styled.div`
  background: ${props=> props.theme.OverlayBg};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px ${props=>props.theme.ModalShadow};
  text-align: center;
  position: relative;

  header {
    font-size: 5.75rem;
    font-weight: 600;
    color: ${props=> props.theme.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${props=> props.theme.title};
  }

  p {
    font-size: 1.25rem;
    color: ${props=> props.theme.title};
    margin-top: .25rem;
  }


  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0; 
  }
`