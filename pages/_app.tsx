import { Archivo, Source_Serif_4 } from 'next/font/google'
import '../styles/index.css'

const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${serif.variable} font-serif`}>
      <Component {...pageProps} />
    </div>
  )
}
