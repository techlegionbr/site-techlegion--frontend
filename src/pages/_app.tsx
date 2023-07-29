/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable import-helpers/order-imports */

import { site } from "@/settings"
import "@/styles/globalStyle.css"

import type { AppProps } from 'next/app'
import Head from "next/head"

import { QueryClientProvider } from 'react-query';

import { queryClient } from "@/services/queryClient";
import { Navigation } from "@/components/Navigation";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href={site.icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Tech Legion" />
        <link rel="canonical" href={site.host} />
        <meta property="og:url" content={site.host} />


      </Head>
      {/* <GlobalStyle /> */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Navigation.ButtonToTop />
      </QueryClientProvider>


    </>
  )
}
