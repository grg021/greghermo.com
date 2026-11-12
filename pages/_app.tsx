import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/index.css'

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

  return <Component {...pageProps} />
}
