import Link from 'next/link'
import { LINKS } from '../lib/constants'

export default function Footer() {
  return (
    <footer id="contact" className="bg-surround text-line">
      <div className="mx-auto max-w-court px-4 pb-12 pt-24 sm:px-8 md:pt-32">
        <h2 className="lettering text-[clamp(3rem,9vw,7.5rem)]">Say hello.</h2>
        <p className="mt-8 max-w-measure text-xl leading-relaxed text-line md:text-2xl">
          Whether it’s about code, coffee, tennis or faith, I’d be glad to hear from you.
        </p>
        <a
          href={`mailto:${LINKS.email}`}
          className="mt-10 inline-block break-all font-serif text-[clamp(1.5rem,4vw,2.75rem)] text-line underline decoration-ball decoration-4 underline-offset-8 transition-colors duration-200 hover:text-ball"
        >
          {LINKS.email}
        </a>

        <div className="mt-24 flex flex-col gap-8 border-t-4 border-line pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li><a className="label text-line underline-offset-4 hover:underline" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="label text-line underline-offset-4 hover:underline" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="label text-line underline-offset-4 hover:underline" href={LINKS.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><Link className="label text-line underline-offset-4 hover:underline" href="/posts">Writing</Link></li>
            <li><Link className="label text-line underline-offset-4 hover:underline" href="/about">About</Link></li>
          </ul>
          <p className="label tabular text-line">© {new Date().getFullYear()} Greg Hermo</p>
        </div>
      </div>
    </footer>
  )
}
