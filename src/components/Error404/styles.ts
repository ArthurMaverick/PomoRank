import styled from 'styled-components'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas: 
  'header'
  'section';

    img.tmt {
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
    z-index: 20;
    grid-area: header;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    /* background-color: black; */

  
    img { 
      width: 15rem;
      cursor: pointer;
    }
  }

  section {
    z-index: 10;
    grid-area: section;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30vh;

    h1 {
      color: ${({theme})=>theme.text};
      font-weight: 600;
      font-size: 200px;
    }

    h2 {
      color: black;
      font-size: 28px;
      font-weight: 600;
      font-family: Inter;
    }

    button {
      margin-top: 30px;
      width: 160px;
      height: 50px;
      border: none;
      background: #5B7947;
      color: white;
      font-size: 20px;
      font-weight: 600;
      border-radius: 5px;

    }
  }

`
