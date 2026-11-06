import { ReactNode } from 'react'
import Footer from '../components/footer'
import Meta, { MetaProps } from '../components/meta'
import Header from '../components/header'

interface Props {
    children: ReactNode
    meta?: MetaProps
}

export default function Layout({ children, meta }: Props) {
    return (
        <div className='antialiased dark:bg-gray-900'>
            <Meta {...meta} />
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
            >
                Skip to content
            </a>
            <Header />
            <div className="min-h-screen py-14">
                <main id="main">{children}</main>
            </div>
            <Footer />
        </div>
    )
}
