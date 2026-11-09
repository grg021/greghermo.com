import Link from 'next/link'
import { WORK } from '../../lib/work'
import WorkLink from '../work-link'

/*
 * The club results board, kept to one line per role: year, name, role and dates.
 * The full entries (what each job was, the stack) live on About.
 */

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-6 px-4 pt-24 sm:px-8 md:pt-32">
      <div className="mx-auto max-w-court bg-board px-5 py-12 sm:px-10 md:py-16 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 id="work-title" className="lettering text-[clamp(2rem,4vw,3rem)] text-line">
            Work
          </h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-board-mist">
            Since 2008 I’ve built useful, maintainable web apps, and lately businesses that bring value.
          </p>
        </div>

        <ol className="mt-10 border-t border-board-rule md:mt-12 md:grid md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.25fr)_auto] md:gap-x-8">
          {WORK.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 gap-y-1 border-b border-board-rule py-5 md:col-span-4 md:grid-cols-subgrid md:items-baseline"
            >
              <p className="lettering tabular text-lg text-ball">{item.year}</p>
              <h3 className="font-display text-lg font-bold leading-snug text-line md:text-xl">{item.name}</h3>
              <p className="col-start-2 text-base leading-snug text-board-mist md:col-start-auto">
                {item.role} <span className="tabular block whitespace-nowrap md:inline"><span className="hidden md:inline">· </span>{item.period}</span>
              </p>
              <div className="col-start-2 whitespace-nowrap pt-1 md:col-start-auto md:pt-0 md:text-right">
                <WorkLink link={item.link} ground="board" />
              </div>
            </li>
          ))}
        </ol>

        <Link href="/about#work" className="label mt-8 inline-block text-line underline decoration-2 underline-offset-4 hover:text-ball">
          Full history
        </Link>
      </div>
    </section>
  )
}
