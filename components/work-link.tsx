import Link from 'next/link'
import { WorkItem } from '../lib/work'

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="square" />
    </svg>
  )
}

function ArrowOut() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="square" />
    </svg>
  )
}

/* The accent link; inner pages only use it on the white sheet. */
export default function WorkLink({ link, ground }: { link: WorkItem['link']; ground: 'board' | 'sheet' }) {
  if (!link) return null
  const className = `meta inline-flex items-center gap-1.5 underline-offset-4 hover:underline ${
    ground === 'board' ? 'text-night-ink' : 'text-accent hover:text-ink'
  }`
  return link.href.startsWith('/') ? (
    <Link href={link.href} className={className}>
      {link.label}
      <ArrowRight />
    </Link>
  ) : (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label}
      <ArrowOut />
    </a>
  )
}
