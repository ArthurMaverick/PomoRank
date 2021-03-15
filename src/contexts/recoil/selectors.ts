import {selector} from 'recoil'
import {counterState} from './Atoms'

export const incrementSelector = selector({
  key: 'incrementSelector',
  get: ({get}) => {
    const count = get(counterState)
    return count + 1
  },
})

export const dencrementSelector = selector({
  key: 'dencrementSelector',
  get: ({get}) => {
    const count = get(counterState)
    return count - 1
  }
})