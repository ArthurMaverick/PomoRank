import { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../styles/global'
import {theme} from '../styles/global'
import {CountdownProvider} from '../contexts'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
          <CountdownProvider>
            <Component {...pageProps} />
          <GlobalStyle/>
          </CountdownProvider>
      </Provider>
    </ThemeProvider>
  </>
  )
}

export default MyApp
