import styled from 'styled-components'


export const SingOutContainer = styled.section`
   width: 100vw;
  height: 100vh;
  /* background: linear-gradient(329.54deg, #5965E0 0%, #4953B8 100%);
   */
   background-image: url('icons/background.svg');

  header {
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;

    ul {
      display: flex;
      margin-right: 5rem;
      padding: 1.3rem;

      li {
        list-style: none;
        
          button{
            margin-right: 10px;
            padding: 0.3rem;
            background-color: #2E384D;
            border: none;
            font-size: 18px;
            border-radius: 3px;
            width: 110px;
            height: 40px;
            color: ${props=> props.theme.white};
            font-weight: 500;
            
            

          }
      }
    }
  }

  main {
    display: grid;
    margin-top: 200px;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr; 
    grid-template-areas: 
    'capa form'; 

    div.capa {
      grid-area: capa;

    }

    div.form {
      grid-area: form;
      display: flex;
      flex-direction: column;

      div.logo {
        margin-bottom: 4.5rem;
      }
    }
  }
`