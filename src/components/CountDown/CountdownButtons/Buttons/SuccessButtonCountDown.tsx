import React, { ReactNode, useContext } from 'react';
import { CountdownContext } from '../../../../contexts';
import { style } from '../../../../stylus';

interface ChildrenProps {
  children: ReactNode
}

export const SuccessBtn = ({children}:ChildrenProps) => {
  const {StartCountdown,setIsActive} = useContext(CountdownContext);

  return (
    <button 
      type='button' 
      className={style.CountDown.coundownBtn}
      onClick={()=>StartCountdown(setIsActive)}
      > 
       {children}
    </button>
  )
}

