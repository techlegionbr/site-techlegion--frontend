
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
              __html: `
              (function (a, m, o, c, r, m) {
                a[m] = {
                  id: '650424',
                  hash: '3edc7ed2a2be43bd7bd98cf2079f7c45103841a795c6289ad399ea0d72238e93',
                  locale: 'pt',
                  inline: false,
                  setMeta: function (p) {
                    this.params = (this.params || []).concat([p]);
                  }
                };
                a[o] =
                  a[o] ||
                  function () {
                    (a[o].q = a[o].q || []).push(arguments);
                  };
                var d = a.document,
                  s = d.createElement('script');
                s.async = true;
                s.id = m + '_script';
                s.src = 'https://gso.kommo.com/js/button.js?1688142305';
                d.head && d.head.appendChild(s);
              })(window, 0, 'crmPlugin', 0, 0, 'crm_plugin');
            `,
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