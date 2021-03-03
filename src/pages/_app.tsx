import {ThemeProvider} from 'styled-components'
import {ColorsProvider} from '../styles/global/styles.themeProvider'
import { CountdownProvider } from '../contexts'
import {Provider} from 'next-auth/client'
import {GlobalStyle} from '../styles/global/style.global'

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
