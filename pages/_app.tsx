import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/GlobalStyle'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavOffset from '../components/NavOffset'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <NavOffset
          child={<Component {...pageProps} />}
        />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
