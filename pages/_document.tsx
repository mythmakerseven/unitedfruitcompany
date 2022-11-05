import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => 
      originalRenderPage({
        enhanceApp: (App) => (props) => 
        sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta property="og:image" content="/opengraph.jpg" />
          <meta name="google-site-verification" content="8tSV9w6RXemjzTTzDYPpTO17MBILISwyw3209Qec08M" />
          <meta name="msvalidate.01" content="05C20B864F39C5927EDE879C9B069800" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
