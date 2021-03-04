import React, { ReactNode } from 'react'
import { FailBtn } from './FailButton'
import { SuccessBtn } from './successButton'
import {FinalCycleBtn } from './FinalCycleButton'

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
  





