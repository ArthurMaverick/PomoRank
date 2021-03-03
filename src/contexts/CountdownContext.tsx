import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { challengesContext } from "./ChallengesContext";
import {StartCountdown,resetTimer } from '../util'

type DispatchBooleanProps = Dispatch<SetStateAction<boolean>>
type DispatchNumber = Dispatch<SetStateAction<number>>

interface CountDownContextData {
  countdownTimeout: NodeJS.Timeout
  HasFinished: boolean
  minutes: number
  seconds: number
  setTime: DispatchNumber
  isActive: boolean
  setIsActive: DispatchBooleanProps 
  setHasFinished: DispatchBooleanProps
  StartCountdown (value: DispatchBooleanProps): void
  resetTimer(
    setIsActive: DispatchBooleanProps,
    setTime: DispatchNumber,
    countdownTimeout: NodeJS.Timeout,
    setHasFinished: DispatchBooleanProps,
    ):void

}
interface CountdownProviderProps {
children: ReactNode
}

export const CountdownContext =  createContext({} as CountDownContextData)

export function CountdownProvider ({children}:CountdownProviderProps) {
  let countdownTimeout: NodeJS.Timeout
  const {startNewChallenge} = useContext(challengesContext)
  const [time, setTime] = useState<number>(25 * 60)
  const [isActive, setIsActive] = useState(false) 
  const [HasFinished,setHasFinished ] = useState<boolean>(false)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60 

  useEffect(()=>{
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(()=> setTime(curr => curr - 1), 1)
    }else if(isActive && time === 0){
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  },[isActive,time])

  return (
    <CountdownContext.Provider value={{
      countdownTimeout,
      HasFinished,
      minutes,
      seconds,
      setTime,
      isActive,
      setHasFinished,
      resetTimer,
      StartCountdown,
      setIsActive,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}
