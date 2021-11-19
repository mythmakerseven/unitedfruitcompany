import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/GlobalStyle'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
