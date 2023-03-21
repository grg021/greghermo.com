import Link from 'next/link'
import Container from '../components/container'
import tw from "tailwind-styled-components"
import { useRouter } from "next/router";

const NavLink = tw.a`
  cursor-pointer font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all
`

export default function Header() {

  const router = useRouter();

  return (
    <header className="py-6">
      <Container>
        <nav className="flex">
          <Link href="/" legacyBehavior>
            <NavLink className={router.pathname == "/" ? "font-semibold" : ""}>Home</NavLink>
          </Link>
          <Link href="/posts" legacyBehavior>
            <NavLink className={router.pathname == "/posts" ? "font-semibold" : ""}>Posts</NavLink>
          </Link>
          <Link href="/about" legacyBehavior>
            <NavLink className={router.pathname == "/about" ? "font-semibold" : ""}>About</NavLink>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
