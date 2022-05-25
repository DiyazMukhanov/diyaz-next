import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Test</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Noto+Sans+Display:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&family=Oxygen:wght@300&family=Roboto:wght@700&family=Zen+Kaku+Gothic+Antique&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
