import React from 'react'
import { style } from '../../../../stylus'

export const FinalCycleBtn = () => {
  return (
    <button 
        disabled
        type='button'
        className={style.CountDown.coundownBtn}
        >
          Ciclo encerrado
        </button>
  )
}
