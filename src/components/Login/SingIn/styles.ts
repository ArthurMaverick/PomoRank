import { Container } from './../../Error404/styles';
import styled from 'styled-components'


export const SingInContainer = styled.section`
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

    header{
      grid-area: menu;
    }

    main.hero {
      grid-area: hero;
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;      

      div.capa {
        position: absolute;
        
        img{
          width: 100%;  
        }
      }

      div.form {
        position: relative;

        
      }

    }
    
  }
  
  

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
        @media(max-width: 600px) {
            display: flex;
            justify-content: center;
          }
        
        img {
          @media(max-width: 600px) {
            width: 70%
          }
        }
        
      }

      div.login_text {
        margin-top: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        @media(max-width: 800px) {
        display: flex;
        justify-content: center;
        }
        
        p {
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: ${props=> props.theme.title};
          @media(max-width: 800px) {
            display: none;

          }
        }
      }

      div.formulario {
        display: flex;
        flex-direction: column;
      
        div.nowrap {
          display: flex;
          flex-wrap: nowrap;
          @media(max-width: 800px) {
            margin: 0 auto;
          }

          input {
            margin-top: 20px;
            width: 340px;
            height: 50px;
            background: linear-gradient(-90deg, #ffffff 0%, #ffffff88 100%);
            border: none;  
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 34px;
            color: ${({theme})=> theme.blueDark};
            padding-left: 10px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0,0,0,.2);
            & ::-webkit-input-placeholder {
              color: #00000088;
              padding-left: 10px;
            }

            @media(max-width: 800px) {
              width: 240px;  
            }
          }

          button {
            margin-top: 20px;
            height: 50px;
            width: 50px;
            background: #2E384D;
            border-radius: 0px 5px 5px 0px;
            border: none;

           
          }
        }

        div.newuser {
          margin-top: 100px;
          
          
          @media(max-width: 800px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
            

          button{
            margin-top: 20px;
            width: 150px;
            height: 50px;
            border: none;
            border-radius: 5px;
            background: linear-gradient(-90deg, #ffffff 0%, #ffffff88 100%);
            color: ${(props)=>props.theme.title};
            font-weight: 600;
            font-size: 19px;
          }
        }
      }

      h1 {
        font-family: Inter;
        color: ${props=> props.theme.title};
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 46px;
        @media(max-width: 800px) {
          display: flex;
          justify-content: center;
        }
      }

    }
  }
`