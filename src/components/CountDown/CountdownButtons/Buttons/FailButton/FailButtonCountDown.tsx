import React, { ReactNode, useContext } from 'react';
import { CountdownContext } from '../../../../../contexts';
import {CoundownBtn} from './styles'

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
    <CoundownBtn 
      type='button' 
      className='coundownButtonActive'
      onClick={()=>{
      resetTimer(setIsActive, setTime, countdownTimeout, setHasFinished)}
      }
    >
      {children}
      </CoundownBtn>
  )
}

