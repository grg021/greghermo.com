/*
 * The club results board: years sit in one fixed amber column, read by position.
 * Outcome figures from the old site are unconfirmed (see PRODUCT.md) and stay out.
 */

const WORK = [
  {
    year: '2025',
    name: 'Bo’s Coffee Calamba',
    role: 'Co-founder, DGH Food Inc. · 2025 – present',
    body: 'My wife and I brought Bo’s Coffee to Calamba to make a place for community, connection and great homegrown coffee. It’s a full store with a drive-thru, and more than a business, it’s a way to serve.',
    stack: 'Stewardship · Community',
    link: { href: 'https://www.boscoffeecalamba.com/', label: 'boscoffeecalamba.com' },
  },
  {
    year: '2021',
    name: 'ContactOut',
    role: 'Senior Software Engineer · 2021 – present',
    body: 'Recruitment intelligence: tools for talent analytics and faster sourcing, built on Laravel and PHP with React.js and Tailwind CSS on the front end.',
    stack: 'Laravel · PHP · React · Tailwind CSS',
    link: { href: 'https://contactout.com', label: 'contactout.com' },
  },
  {
    year: '2016',
    name: 'Custom Software by Preston',
    role: 'Senior PHP Developer (Laravel) · 2016 – 2021',
    body: 'Designed and built web information systems and RESTful APIs for clients in Chicago and Durham, NC, and ran the AWS servers behind them for web and database hosting.',
    stack: 'PHP · Laravel · Vue.js · Angular · AWS',
    link: null,
  },
  {
    year: '2015',
    name: 'Vinteo',
    role: 'Co-founder & CEO, Lead Developer · 2015 – 2016',
    body: 'Automated video analysis that collected consumer-behaviour data for stores, with real-time store monitoring dashboards. Vinteo won IdeaSpace PH 2015.',
    stack: 'Video analysis · Dashboards · Startup',
    link: {
      href: 'https://www.techinasia.com/ideaspace-2015-startup-competition-winners',
      label: 'IdeaSpace 2015 winners',
    },
  },
  {
    year: '2011',
    name: 'Solutions Resource',
    role: 'Lead Developer, then Co-founder & CTO · 2011 – 2015',
    body: 'Led the technology and technical team on web, mobile and custom software projects, then joined the board as CTO for planning and technical management. I also taught Red Hat JBoss courses for partner IT Group Inc.',
    stack: 'PHP · Java EE · Liferay · Joomla · WordPress',
    link: null,
  },
  {
    year: '2008',
    name: 'ASTI',
    role: 'Science Research Specialist · 2008 – 2010',
    body: 'My first job, at the Advanced Science and Technology Institute: building and maintaining the ASTI Information System and other information systems.',
    stack: 'PHP · jQuery · MySQL · CentOS',
    link: null,
  },
]

function ArrowOut() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="square" />
    </svg>
  )
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-6 px-4 pt-24 sm:px-8 md:pt-32">
      <div className="mx-auto max-w-court bg-board px-5 py-14 sm:px-10 md:py-20 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end">
          <h2 id="work-title" className="lettering text-[clamp(3rem,8vw,6.5rem)] text-line">
            Work
          </h2>
          <p className="max-w-measure text-lg leading-relaxed text-board-mist md:text-xl">
            Since 2008 I’ve built useful, maintainable web apps, and lately businesses that bring value. Most days that means the Laravel ecosystem (Laravel, Livewire, Inertia, Pest), with React, Next.js and React Native when the job calls for them.
          </p>
        </div>

        <ol className="mt-14 border-t border-board-rule md:mt-20">
          {WORK.map((item) => (
            <li
              key={item.name}
              className="grid gap-x-10 gap-y-3 border-b border-board-rule py-8 md:grid-cols-[7rem_minmax(0,1fr)] md:py-10 lg:grid-cols-[8rem_minmax(0,0.9fr)_minmax(0,1.3fr)]"
            >
              <p className="lettering tabular text-2xl text-ball md:text-3xl">{item.year}</p>
              <div>
                <h3 className="lettering text-[1.75rem] leading-none text-line">{item.name}</h3>
                {(() => {
                  const [role, period] = item.role.split(' · ')
                  return (
                    <p className="label mt-3 space-y-1.5 text-board-mist">
                      <span className="block">{role}</span>
                      {period && <span className="tabular block whitespace-nowrap text-line/70">{period}</span>}
                    </p>
                  )
                })()}
              </div>
              <div className="md:col-start-2 lg:col-start-3">
                <p className="max-w-measure text-lg leading-relaxed text-line/90">{item.body}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <p className="label text-board-mist">{item.stack}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label inline-flex items-center gap-1.5 text-ball underline-offset-4 hover:underline"
                    >
                      {item.link.label}
                      <ArrowOut />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
