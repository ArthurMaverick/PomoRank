import styled from 'styled-components'

export const Container = styled.footer`
  height: 100%;
  display: flex;
  background: #5965E0;

  @media(max-width: 800px) {
    width: 100%;
    height: 90px;
    display: flex;
    
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media(max-width: 800px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }



    li {
      list-style: none;
      text-decoration: none;

      button {
        width: 104px;
        height: 55px;
        border: none;
        border-left: 5px  #5965E0 solid;
        color: white;
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
        background: none;
        &:hover {
          border-top: none;
          border-left: 5px white solid;
          border-right: none;
          border-bottom: none;
          @media(max-width: 800px){
            
          }
        }
          @media(max-width: 800px){
            width: 55px;
            height: 89px;
            border: none;
            border-bottom: 5px  #5965E0 solid;
            color: white;
            transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
            background: none;
            &:hover{
              border-top: none;
              border-left: none;
              border-right: none;
              border-bottom: 5px white solid;
            }
          }
        

        
      }

    }
     

  } 
`


