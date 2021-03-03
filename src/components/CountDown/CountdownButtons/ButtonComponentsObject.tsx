import React, { ReactNode } from 'react'
import { FailBtn } from './Buttons'
import { SuccessBtn } from './Buttons'
import {FinalCycleBtn } from './Buttons'

interface ChildrenProps {
  children: ReactNode
}

export const Buttons = {
  Fail: ({children}:ChildrenProps) => {
    return (
    <FailBtn >
      {children}
    </FailBtn>
    )
  },
  Success: ({children}:ChildrenProps) => {
    return (
      <SuccessBtn>
        {children}
      </SuccessBtn>
    )  
  },
  FinalCycle: ()=> {
    return (
      <FinalCycleBtn/>
    )
  }

}
  





