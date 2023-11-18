import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>아임냥</title>
      <meta name="description" content="Made with 💕" />
    </Head>
    <Component {...pageProps} />
  </>)
}