import {ThemeProvider} from 'styled-components'
import {ColorsProvider} from '../styles/global'
import {GlobalStyle} from '../styles/global'
import {CountdownProvider} from '../contexts'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Provider session={pageProps.session}>
      <ThemeProvider theme={ColorsProvider}>
        <GlobalStyle/>
        <CountdownProvider>
          <Component {...pageProps} />
        </CountdownProvider>
      </ThemeProvider>
    </Provider>
  </>
  )
}

export default MyApp
