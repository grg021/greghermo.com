import Document, { Html, Head, Main, NextScript } from 'next/document'

/*
 * tasteskill deal (plan line 2), see DESIGN.md:
 * type service · hero split · palette brand (court blue, navy ink, ball yellow on the blue band) · type archivo · radius sharp
 * nav-centre · footer-columns · close-type · rhythm dark-band · buttons block · mark ring
 * moment word-highlight (the Journey statement)
 *
 * The kit stylesheets sit in their own cascade layer between Tailwind's base (preflight) and its
 * utilities: the kit beats the reset, and inner pages can still adjust it with utility classes.
 */
const KIT_CSS = ['system.css', 'ui/cards.css', 'layout/layout.css', 'icons/icon.css', 'diagrams/diagram.css']

const KIT_IMPORTS = `@layer theme, base, kit, components, utilities;
${KIT_CSS.map((f) => `@import url('/kit/${f}') layer(kit);`).join('\n')}`

const PALETTE = `:root {
  --p-bg: #f3f2ec; --p-surface: #e7e6de; --p-ink: #0e1b2c; --p-muted: #55606d;
  --p-accent: #1f4f8a; --p-accent-ink: #f3f2ec; --p-action: #1f4f8a; --p-action-ink: #f3f2ec;
  --p-inv-bg: #173a63; --p-inv-surface: #1f4675; --p-inv-ink: #f3f2ec; --p-inv-muted: #c3cedb;
  --p-inv-accent: #dff04a; --p-inv-accent-ink: #0e1b2c; --p-inv-action: #dff04a; --p-inv-action-ink: #0e1b2c;
  --font-display: "Archivo", system-ui, sans-serif;
  --font-text: "Archivo", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.025em;
  --display-tracking-xl: -0.035em;
  --display-stretch: 110%;
  --ly-scale: 0.9;
}`

/* The hero's entrance and the moment guard, set before the first paint (motion.md, moments.md). */
const GUARDS = `document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);
document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-type="service" data-radius="sharp" data-buttons="block" data-motion="">
        <Head>
          <meta name="site-kind" content="other" />
          <meta name="page-type" content="service" />
          <style dangerouslySetInnerHTML={{ __html: KIT_IMPORTS }} />
          {/* motion.css is linked on its own (unlayered), so the checker and the hover layer both see it */}
          <link rel="stylesheet" href="/kit/motion/motion.css" />
          <style dangerouslySetInnerHTML={{ __html: PALETTE }} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..600&display=swap" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{ __html: GUARDS }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
