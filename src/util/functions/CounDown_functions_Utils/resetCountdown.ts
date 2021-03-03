import { Dispatch, SetStateAction} from 'react'

type SetIsActiveProps = Dispatch<SetStateAction<boolean>>
type SetTimeProps = Dispatch<SetStateAction<number>>

export function resetTimer(
  setIsActive: SetIsActiveProps,
  setTime: SetTimeProps,
  countdownTimeout: NodeJS.Timeout,
  setHasFinished: SetIsActiveProps,
): void{
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
}