
// import GlobalStyle from '@/styles/globalStyle'
import "@/styles/globalStyle.css"
import type { AppProps } from 'next/app'
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </>
  )
}
