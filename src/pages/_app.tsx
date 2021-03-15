import { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../styles/global'
import {theme} from '../styles/global'
import {CountdownProvider} from '../contexts'
import {Provider} from 'next-auth/client'
import {RecoilRoot} from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
          <CountdownProvider>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          <GlobalStyle/>
          </CountdownProvider>
      </Provider>
    </ThemeProvider>
  </>
  )
}

export default MyApp
