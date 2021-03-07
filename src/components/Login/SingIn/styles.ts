import styled from 'styled-components'


export const SingInContainer = styled.section`
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

      div.login_text {
        margin-top: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        
        p {
          font-family: Inter;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: ${props=> props.theme.title};
        }
      }

      div.formulario {
        display: flex;
        /* flex-wrap: nowrap; */
      
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

      h1 {
        font-family: Inter;
        color: ${props=> props.theme.title};
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 46px;

      }
    }
  }
`