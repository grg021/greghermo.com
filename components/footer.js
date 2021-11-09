import Container from './container'
import tw from "tailwind-styled-components"

const InternalLink = tw.a`
  text-gray-500 hover:text-gray-600 transition
`

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      <div className="py-16 w-full max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <InternalLink href="/">Home</InternalLink>
          <InternalLink href="/about">About</InternalLink>
          <InternalLink href="/posts">Posts</InternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <InternalLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/greghermo">Twitter</InternalLink>
          <InternalLink target="_blank" rel="noopener noreferrer" href="https://github.com/grg021">GitHub</InternalLink>
          <InternalLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greghermo/">LinkedIn</InternalLink>
        </div>
          <div className="flex flex-col space-y-4">
          </div>
        </div>
      </Container>
    </footer>
  )
}
