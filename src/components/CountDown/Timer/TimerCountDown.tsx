import { CountdownContainer } from './styles'

interface MinutesAndSecondsProps {
  min: Array<string>
  sec: Array<string>
}

export const Timer = ({ min, sec }: MinutesAndSecondsProps) => {
  return (
    <CountdownContainer>
        <div>
          <span>{min[0]}</span>
          <span>{min[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{sec[0]}</span>
          <span>{sec[1]}</span>
        </div>
      </CountdownContainer>
  )
}
