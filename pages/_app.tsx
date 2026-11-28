import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import '../styles/index.css'

/*
 * Google Analytics 4. The header and footer use plain links, so every page is a full load and the
 * config call below records each page view on its own; no router listener is needed.
 */
const GA_ID = 'G-BPEYMLB96Y'

/*
 * The kit's scripts (nav sheet, hovers, the hero's entrance, the moment) run once React has
 * hydrated, so they never race it. The header and footer use plain links between pages, so each
 * page load runs them again.
 */
const KIT_JS = ['/kit/system.js', '/kit/motion/motion.js', '/kit/layout/layout.js', '/kit/diagrams/mount.js']

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    for (const src of KIT_JS) {
      if (document.querySelector(`script[src="${src}"]`)) continue
      const s = document.createElement('script')
      s.type = 'module'
      s.src = src
      document.body.appendChild(s)
    }
  }, [])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
