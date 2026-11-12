import { LINKS } from '../lib/constants'
import { MAIN_ACTION } from './header'

/* footer.closing: the dealt close-type (row 1) and footer-columns (row 2) in one last screen. */

const COLUMNS = [
  {
    title: 'Site',
    links: [
      { href: '/#work', label: 'Work' },
      { href: '/#journey', label: 'Journey' },
      { href: '/posts', label: 'Writing' },
      { href: '/about', label: 'About' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { href: '/ehealth', label: 'eHealth projects' },
      { href: 'https://contactout.com', label: 'ContactOut' },
      { href: 'https://www.boscoffeecalamba.com/', label: 'Bo’s Coffee Calamba' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { href: LINKS.linkedin, label: 'LinkedIn' },
      { href: LINKS.github, label: 'GitHub' },
      { href: LINKS.twitter, label: 'Twitter' },
      { href: '/feed.xml', label: 'RSS feed' },
    ],
  },
]

const isExternal = (href: string) => href.startsWith('http')

export default function Footer() {
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Write to me about code, coffee or tennis</h2>
            <p>Questions about Laravel, a project, the coffee shop or faith: I’d be glad to hear from you.</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={MAIN_ACTION.href}>
            {MAIN_ACTION.label}
            <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path className="m-arrow__stem" d="M1 6h8" />
              <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
            </svg>
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-4">
              <a className="nav__logo" href="/">
                <span className="mark" data-mark="ring" aria-hidden="true" />
                Greg Hermo
              </a>
              <p className="footer__lede">Software engineer, coffee shop co-founder and tennis player in Laguna, Philippines.</p>
            </div>
            {COLUMNS.map((col) => (
              <div className="span-2 footer__col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} {...(isExternal(l.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} Greg Hermo</span>
            <span>Product names and logos are trademarks of their owners</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
