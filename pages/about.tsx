import { personSchema } from '../lib/schema'
import Layout from '../components/layout'
import PageBand from '../components/page-band'
import WorkLink from '../components/work-link'
import { STACK_NOTE, WORK } from '../lib/work'

const SECTIONS = [
  {
    label: 'Identity',
    title: 'Mastery and impact',
    body: [
      'I am driven by two main forces: mastery and impact.',
      'In business, my motivation is stewardship: taking care of what God has blessed us with and serving the community. I want to provide jobs, create value, and be salt and light in the places God puts us.',
      'I also have a deep drive for mastery. Whether it’s in code or on the tennis court, I love the process of levelling up, refining technique, and seeing progress. I strive for excellence, not for my own glory, but to make an impact for the mission God has given me.',
    ],
  },
  {
    label: 'Origin',
    title: 'The spark',
    body: [
      'I first felt alive in high school when I encountered programming through Pascal and Turbo C. My teacher assigned a project to build something using the basics. I built a two-level game: a maze with hidden obstacles and a boss fight against a dragon.',
      'The code was long and took hours, but I remember the joy of building something from nothing. That moment defined who I am today: someone who loves building, solving, and bringing ideas to life.',
    ],
  },
  {
    label: 'Philosophy',
    title: 'The athlete mindset',
    body: [
      'Being an athlete feels the most natural to me. The athlete mindset spills over into everything I do: discipline, repetition, structure, progress, growth, and the pursuit of excellence.',
      'I believe in self-practice with a clear goal. I enjoy structured training that pushes me toward growth.',
    ],
  },
  {
    label: 'Learning',
    title: 'By building',
    body: [
      'I learn fastest by building. When something is new, I dive in, get my hands dirty, and use my intuition. Execution exposes the real problems, and solving them makes me grow fast.',
      'I gravitate toward what I love. I’d rather master one thing deeply than shallow-dive many things.',
    ],
  },
  {
    label: 'Values',
    title: 'Faith and family',
    body: [
      'My identity in Christ is my foundation. God is good, He is sovereign, and my purpose is in Him.',
      'This season is about strengthening my foundations: faith, family, craft, and character. I am called to be a supportive husband and a present father to my kids.',
    ],
  },
  {
    label: 'Vision',
    title: 'Building systems',
    body: [
      'I want to become a builder of deep, reliable, and impactful systems. My businesses are tools for ministry, wealth-building, stewardship, and legacy.',
      'Ultimately, I want to be remembered as a follower of Jesus, an athlete, a good husband, and a good father.',
    ],
  },
]

const EDUCATION = [
  {
    year: '2015',
    school: 'Asian Institute of Management',
    degree: 'Entrepreneurship Development Program, certificate course',
    note: 'IdeaSpace PH partnership',
    logo: null,
  },
  {
    year: '2009',
    school: 'University of the Philippines Diliman',
    degree: '25 graduate units in Computer Science (MS program, not completed)',
    note: 'Web Science Group · 1.21 GPA (A+)',
    logo: '/assets/about/up-logo.svg',
  },
  {
    year: '2009',
    school: 'University of the Philippines Los Baños',
    degree: 'Bachelor of Science in Computer Science',
    note: '2004 – 2009',
    logo: '/assets/about/up-logo.svg',
  },
]

export default function About() {
  return (
    <Layout meta={{
        title: 'About | Greg Hermo',
        description: 'About Greg Hermo: Senior Software Engineer at ContactOut, Laravel and React developer, UP Computer Science graduate, co-founder of Bo’s Coffee Calamba, husband, father and tennis player from Laguna, Philippines.',
        path: '/about',
        type: 'profile',
        jsonLd: personSchema,
      }}>

      <PageBand title="About">
        <p className="text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug">
          A calm, disciplined builder who honors God and pursues mastery in everything he does.
        </p>
      </PageBand>

      <div className="wrap">
        <div className="w-full bg-sheet rounded-[20px] px-5 pb-16 pt-4 text-ink sm:px-10 md:pb-24 lg:px-16">
          {SECTIONS.map(({ label, title, body }) => (
            <section
              key={label}
              aria-labelledby={`about-${label}`}
              className="border-b border-rule py-12 md:py-16 lg:pl-[16rem]"
            >
              <div>
                <h2 id={`about-${label}`} className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">
                  {title}
                </h2>
                <div className="mt-6 max-w-measure space-y-5 text-lg leading-relaxed text-muted">
                  {body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section id="work" aria-labelledby="about-work" className="scroll-mt-6 border-b border-rule py-12 md:py-16 lg:pl-[16rem]">
            <div>
              <h2 id="about-work" className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">
                Work
              </h2>
              <p className="mt-6 max-w-measure text-lg leading-relaxed text-muted">
                Since 2008 I’ve built useful, maintainable web apps, and lately businesses that bring value. {STACK_NOTE}
              </p>
              <ol className="mt-8 border-t border-rule">
                {WORK.map((w) => (
                  <li key={w.name} className="[display:grid] gap-x-6 gap-y-1 border-b border-rule py-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
                    <p className="display tabular pt-1 text-xl text-accent">{w.year}</p>
                    <div>
                      <h3 className="font-display text-xl font-medium leading-snug">{w.name}</h3>
                      <p className="mt-1 text-base text-muted">
                        {w.role} <span className="tabular block whitespace-nowrap sm:inline"><span className="hidden sm:inline">· </span>{w.period}</span>
                      </p>
                      <p className="mt-3 max-w-measure text-lg leading-relaxed text-muted">{w.body}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                        <p className="meta text-accent">{w.stack}</p>
                        <WorkLink link={w.link} ground="sheet" />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="about-education" className="py-12 md:py-16 lg:pl-[16rem]">
            <div>
              <h2 id="about-education" className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">
                Education
              </h2>
              <ol className="mt-8 border-t border-rule">
                {EDUCATION.map((e) => (
                  <li key={e.school} className="[display:grid] grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-6 border-b border-rule py-6 sm:grid-cols-[4.5rem_6rem_minmax(0,1fr)]">
                    {e.logo ? (
                      <img src={e.logo} alt="" width={72} height={72} className="h-[4.5rem] w-[4.5rem] object-contain" />
                    ) : (
                      <span aria-hidden="true" />
                    )}
                    <p className="display tabular hidden pt-1 text-2xl text-accent sm:block">{e.year}</p>
                    <div>
                      <h3 className="font-display text-xl font-medium leading-snug">{e.school}</h3>
                      <p className="mt-1 text-lg text-muted">{e.degree}</p>
                      <p className="meta tabular mt-2 text-accent">
                        <span className="sm:hidden">{e.year}</span>
                        {e.note && <span><span className="sm:hidden"> · </span>{e.note}</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
