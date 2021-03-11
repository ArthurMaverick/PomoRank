import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height:100vh;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr; 
  grid-template-areas: 
  'header' 
  'main'; 

  img.background {
    background: url('icons/tomato.svg');
      display: table;
      background-repeat: no-repeat;
      background-position: 60% ;
      background-size: cover;
      position: absolute; 
      filter: blur(20px);    
      
      width: 100%;
      height: 100%;
  }

  header {
    grid-area: header;

    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  main {
    grid-area: main;

    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
      color: ${({theme})=> theme.title};
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
    }

    button {
      height: 80px;
      width: 300px;
      background: #ffffffaa;
      box-shadow: 0 2px 6px rgba(0,0,0,.2);
      border-radius: 0px 5px 5px 0px;
      border: none;
      font-weight: 600;
      font-size: 36px;
      transition: 0.2s;
      &:hover{
        opacity: 90%;
      }
    }
  }

`
