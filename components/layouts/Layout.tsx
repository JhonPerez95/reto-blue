import { FC } from 'react'

import Head from 'next/head'

interface Props {
  title?: string
  children?: React.ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Blue Express'}</title>
        <meta name="author" content="Jhon Perez" />
        <meta name="description" content={`Challege by  ${title}`} />
        <meta name="keywords" content={`${title}, Blue, Challege`} />
      </Head>

      {/* <Navbar /> */}

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  )
}
