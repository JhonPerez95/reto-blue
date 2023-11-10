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
      </Head>
      <NavbarComponet />

      <main className="container mx-auto my-7">{children}</main>
    </>
  )
}
