import { Dispatch, SetStateAction } from 'react'

type SetIsActiveProps = Dispatch<SetStateAction<boolean>>

export function StartCountdown(
  setIsActive: SetIsActiveProps,
): void{
  
    setIsActive(true)
 
}