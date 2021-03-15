import styled from 'styled-components'


export const SingOutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url('icons/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media(max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 
    'menu'
    'hero';
  }

  header {
    grid-area: menu;
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;

    ul {
      display: flex;
      margin-right: 5rem;
      padding: 1.3rem;
      @media(max-width: 800px) {
        margin: 0 auto;
      }


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

  main.hero {
    grid-area: hero;
    display: grid;
    margin-top: 200px;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr; 
    grid-template-areas: 
    'capa form'; 
    @media(max-width: 800px) {
      width: 100vw;
      height: 100vh;
      margin-top: 0px;
      
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

   

    div.capa {
      grid-area: capa;
      
      @media(max-width: 800px) {
        
        position: absolute;
        img {
          width: 80%;
        }
      }
    } 

    div.form {
      grid-area: form;
      display: flex;
      flex-direction: column;
      @media(max-width: 800px) {
      }

     

      div.logo {
        margin-bottom: 4.5rem;
        
          @media(max-width: 600px) {
          img {
            width: 100%;
            padding: 50px;
          }
        }

      }
    }
  }
`