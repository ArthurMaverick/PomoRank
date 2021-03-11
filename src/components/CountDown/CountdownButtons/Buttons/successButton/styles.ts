import styled from 'styled-components'

export const CoundownBtn = styled.button`
  width: 100%;
  height: 5rem;
 
  margin-top: 1.25rem;
  margin: 0 auto;


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
`