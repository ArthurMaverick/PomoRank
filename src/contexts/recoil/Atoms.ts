import {atom} from 'recoil'


export const counterState = atom({
  key: 'counterState', // unique ID  (WITH RESPECT TO OTHER ATOMS/SELECTORS)
  default: 0 // DEFAULT VALUE (INITIAL VALUE)
})