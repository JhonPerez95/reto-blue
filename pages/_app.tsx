import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <link
          rel="shortcut icon"
          href="https://play-lh.googleusercontent.com/rF0e0IWIk7Fx_To-PnBLlAZtS9v14Bt5OdiF_kQ9thEvm6DUrUHXTzpIt6lPt7IlfcM=w240-h480-rw"
        />
      </Head>
      <main className="dark">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}

export default MyApp
