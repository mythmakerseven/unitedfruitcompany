import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      thirdary: string,
      darkBackground: string
    },
    navbar: {
      height: string
    },
    shadow: string
  }
}