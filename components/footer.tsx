import Container from './container'
import Link from 'next/link'

const linkClasses = 'text-gray-500 hover:text-gray-600 transition'


export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Container>
      <div className="py-16 w-full max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" className={linkClasses}>Home</Link>
          <Link href="/about" className={linkClasses}>About</Link>
          <Link href="/posts" className={linkClasses}>Posts</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <a className={linkClasses} target="_blank" rel="noopener noreferrer" href="https://twitter.com/greghermo">Twitter</a>
          <a className={linkClasses} target="_blank" rel="noopener noreferrer" href="https://github.com/grg021">GitHub</a>
          <a className={linkClasses} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greghermo/">LinkedIn</a>
        </div>
          <div className="flex flex-col space-y-4">
          </div>
        </div>
      </Container>
    </footer>
  )
}
