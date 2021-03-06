import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <Header />
            <div className="min-h-screen py-14">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
