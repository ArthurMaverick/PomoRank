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
    background:  ${(props)=>props.theme.white};
    box-shadow: 0 0 60px ${props=>props.theme.CountdownShadow};
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 1px solid ${props=>props.theme.CountdownBorder};
  }

  & > div span:last-child{
    border-left: 1px solid ${props=>props.theme.CountdownBorder};
  }

  & > span{
    font-size: 6.25rem;
    margin: 0  0.5rem;
}

`