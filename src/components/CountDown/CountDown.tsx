
// TODO passar context por props
import { useContext } from 'react'
import { CountdownContext } from '../../contexts'
import { Buttons } from './CountdownButtons'
import { Timer } from './Timer/TimerCountDown'
import { Container } from './styles'

export const CountDown = () => {
  const { minutes, seconds, HasFinished, isActive } = useContext(CountdownContext)
  const [restMinutes, restSeconds] = configTime(minutes, seconds)

  function configTime (minutes:number, seconds: number) {
    const [...restMinutes] = String(minutes).padStart(2, '0').split('')
    const [...restSeconds] = String(seconds).padStart(2, '0').split('')
    return [restMinutes, restSeconds]
  }

  return (
    <Container>
      <Timer min={restMinutes} sec={restSeconds}/>
      {
        HasFinished
          ? <Buttons.FinalCycle/>
          : (<>
              {isActive
                ? <Buttons.Fail> Abadonar Ciclo </Buttons.Fail>
                : <Buttons.Success> Iniciar Ciclo </Buttons.Success>
              }
          </>
            )
      }
    </Container>
  )
}
