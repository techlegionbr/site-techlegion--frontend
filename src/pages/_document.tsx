
import { SCRIPT_BUTTON_CONTACTS_KOMMO } from '@/settings/externalScripts/kommo'
import googleFontsConfig from '@/styles/googleFontsConfig'
import { ServerStyleSheet } from 'styled-components'

import Document, { type DocumentContext, type DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = async () =>
        await originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }



  render(): JSX.Element {
    return (
      <Html lang='pt-br'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={googleFontsConfig.import} rel="stylesheet" as="font" />
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
          <script
            dangerouslySetInnerHTML={{
              __html: SCRIPT_BUTTON_CONTACTS_KOMMO,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}