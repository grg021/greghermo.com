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
    <div className="min-h-screen bg-surround text-line">
      <Meta {...meta} />
      <a
        href="#main"
        className="label sr-only z-50 bg-ball px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
