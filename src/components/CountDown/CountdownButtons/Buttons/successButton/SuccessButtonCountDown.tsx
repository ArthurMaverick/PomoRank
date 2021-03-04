import React, { ReactNode, useContext } from 'react';
import { CountdownContext } from '../../../../../contexts';
import {CoundownBtn} from './styles'

interface ChildrenProps {
  children: ReactNode
}

export const SuccessBtn = ({children}:ChildrenProps) => {
  const {StartCountdown,setIsActive} = useContext(CountdownContext);

  return (
    <CoundownBtn 
      type='button' 
      onClick={()=>StartCountdown(setIsActive)}
      > 
       {children}
    </CoundownBtn>
  )
}

