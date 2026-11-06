import Link from 'next/link'
import Container from '../components/container'
import cn from 'classnames'
import { useRouter } from "next/router";

const navLinkClasses = `
  cursor-pointer font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all
`

export default function Header() {

  const router = useRouter();

  return (
    <header className="py-6">
      <Container>
        <nav className="flex">
          <Link href="/" className={cn(navLinkClasses, { "font-semibold": router.pathname === "/" })}>Home</Link>
          <Link href="/posts" className={cn(navLinkClasses, { "font-semibold": router.pathname === "/posts" })}>Posts</Link>
          <Link href="/about" className={cn(navLinkClasses, { "font-semibold": router.pathname === "/about" })}>About</Link>
        </nav>
      </Container>
    </header>
  );
}
