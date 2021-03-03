import React from 'react'
import { style } from '../../stylus'

interface MinutesAndSecondsProps {
  min: Array<string>
  sec: Array<string>
}

export const Timer = ({min, sec}: MinutesAndSecondsProps) => {
  return (
    <div className={style.CountDown.countdownContainer}>
        <div>
          <span>{min[0]}</span>
          <span>{min[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{sec[0]}</span>
          <span>{sec[1]}</span>
        </div>
      </div>
  )
}
