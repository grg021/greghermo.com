import { useRouter } from 'next/router'
import { LINKS } from '../lib/constants'

/*
 * nav-centre (dealt): the name on the left line, four words in the middle, the main action on the
 * right line. Plain <a> links between pages, so the kit's scripts run again on each page.
 */
const NAV = [
  { href: '/#work', label: 'Work', match: null },
  { href: '/#journey', label: 'Journey', match: null },
  { href: '/posts', label: 'Writing', match: '/posts' },
  { href: '/about', label: 'About', match: '/about' },
]

export const MAIN_ACTION = { label: 'Email Greg', href: `mailto:${LINKS.email}` }

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <a className="nav__logo" href="/">
          <span className="mark" data-mark="ring" aria-hidden="true" />
          Greg Hermo
        </a>
        <nav className="nav__links" aria-label="Main">
          {NAV.map(({ href, label, match }) => (
            <div className="nav__item" key={href}>
              <a
                className="nav__link"
                href={href}
                aria-current={match !== null && pathname.startsWith(match) ? 'page' : undefined}
              >
                {label}
              </a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={MAIN_ACTION.href}>
            {MAIN_ACTION.label}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
