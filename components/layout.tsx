import { ReactNode } from 'react'
import Footer from './footer'
import Meta, { MetaProps } from './meta'
import Header from './header'

interface Props {
  children: ReactNode
  meta?: MetaProps
}

export default function Layout({ children, meta }: Props) {
  return (
    <>
      <Meta {...meta} />
      <Header />
      <main id="top">{children}</main>
      <Footer />
    </>
  )
}
