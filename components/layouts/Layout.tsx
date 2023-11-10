import { FC } from 'react'

import Head from 'next/head'
import { NavbarComponet } from '../ui'
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
        <link
          rel="shortcut icon"
          href="https://play-lh.googleusercontent.com/rF0e0IWIk7Fx_To-PnBLlAZtS9v14Bt5OdiF_kQ9thEvm6DUrUHXTzpIt6lPt7IlfcM=w240-h480-rw"
        />
      </Head>
      <NavbarComponet />

      <main className="container mx-auto my-4">{children}</main>
    </>
  )
}
