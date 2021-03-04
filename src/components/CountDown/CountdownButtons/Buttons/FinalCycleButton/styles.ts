import styled from 'styled-components'

export const CoundownBtn = styled.button`
  width: 100%;
  height: 5rem;
 
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};

  font-size: 1.25rem;
  font-weight: 600;
  transition:  background-color 0.2s;

  &:not(:disabled):hover{
    background: ${props=> props.theme.blueDark};
  }

  &:disabled{
    background: ${props => props.theme.white};
    color: ${props=> props.theme.text};
    cursor: not-allowed;
  }
`