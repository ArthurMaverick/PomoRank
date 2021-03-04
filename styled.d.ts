import 'styled-components'

declare module 'styled-component' {
  export interface DefaultTheme {
    white: string,    
    background:string,
    grayline: string,
    text: string,
    textHighlight: string,
    title: string,
    red: string,
    green: string,
    blue: string,
    blueDark: string,
    blueTwitter: string,
  }
}