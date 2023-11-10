import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="dark">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}

export default MyApp
