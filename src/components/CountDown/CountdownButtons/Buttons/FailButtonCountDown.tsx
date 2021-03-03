import React, { ReactNode, useContext } from 'react';
import { CountdownContext } from '../../../../contexts';
import { style } from '../../../../stylus';


interface ChildrenProps {
  children: ReactNode

}

export const FailBtn = ({children}:ChildrenProps) => {
  const {
    setHasFinished,
    countdownTimeout,
    resetTimer,
    setIsActive,
    setTime} = useContext(CountdownContext);

  return (
    <button 
      type='button' 
      className={
        `${style.CountDown.coundownBtn} 
        ${style.CountDown.coundownButtonActive}`
      }
      onClick={()=>{
      resetTimer(setIsActive, setTime, countdownTimeout, setHasFinished)}
      }
    >
      {children}
      </button>
  )
}

