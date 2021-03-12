import styled from 'styled-components'

interface BarProps {
  percentToNextLevel: number
}


export const ExperienceBarUi =  styled.div<BarProps>`
  margin: 0 120px;
  grid-area: 'experiencebar';
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 800px) {
    grid-area: 'experiencebar';
    margin: 0 auto;
  }

  span {
   font-size: 1rem;

  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props=> props.theme.grayline};
    margin: 0 1.5rem;
    position: relative; 

  }

  & > div > div {
    height: 4px;
    border-radius: 4px;
    background: ${props=> props.theme.green};
    width: ${({percentToNextLevel})=> percentToNextLevel}%;
    transition: 1s;

  }

   span.currentExperience{
    position: absolute;
    transform: translateX(-50%);
    top: 20px;
    left: ${({percentToNextLevel})=> percentToNextLevel}%;
    transition: 1s ; 
  }

`