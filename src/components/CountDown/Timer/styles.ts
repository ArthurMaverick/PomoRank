import styled from 'styled-components'


export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props)=>props.theme.title};

  & >  div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    background: var(--white);
    box-shadow: 0 0 60px rgba(0,0,0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  & > div span:last-child{
    border-left: 1px solid #f0f1f3;
  }

  & > span{
    font-size: 6.25rem;
    margin: 0  0.5rem;
}

`