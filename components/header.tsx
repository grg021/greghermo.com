import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV = [
  { href: '/#work', label: 'Work', match: null },
  { href: '/#journey', label: 'Journey', match: null },
  { href: '/posts', label: 'Writing', match: '/posts' },
  { href: '/about', label: 'About', match: '/about' },
]

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className="bg-surround">
      <div className="mx-auto flex max-w-court flex-col gap-4 px-4 pb-6 pt-6 sm:px-8 md:flex-row md:items-center md:justify-between md:pb-8 md:pt-8">
        <Link
          href="/"
          className="lettering text-[1.375rem] text-line no-underline hover:text-ball"
          aria-label="Greg Hermo, home"
        >
          Greg Hermo
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-9">
            {NAV.map(({ href, label, match }) => {
              const active = match !== null && pathname.startsWith(match)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`label inline-block border-b-4 pb-1 text-line transition-colors duration-200 hover:border-line ${
                      active ? 'border-line' : 'border-transparent'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
