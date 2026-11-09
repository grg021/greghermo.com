import { personSchema } from '../lib/schema'
import Layout from '../components/layout'
import PageBand from '../components/page-band'

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
        <p className="font-serif text-[clamp(1.25rem,2.6vw,1.75rem)] italic leading-snug">
          A calm, disciplined builder who honors God and pursues mastery in everything he does.
        </p>
      </PageBand>

      <div className="px-4 sm:px-8">
        <div className="mx-auto max-w-court bg-line px-5 pb-16 pt-4 text-ink sm:px-10 md:pb-24 lg:px-16">
          {SECTIONS.map(({ label, title, body }) => (
            <section
              key={label}
              aria-labelledby={`about-${label}`}
              className="border-b border-ink/15 py-12 md:py-16 lg:pl-[16rem]"
            >
              <div>
                <h2 id={`about-${label}`} className="lettering text-[clamp(1.75rem,3.4vw,2.75rem)]">
                  {title}
                </h2>
                <div className="mt-6 max-w-measure space-y-5 text-lg leading-relaxed text-ink-soft">
                  {body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section aria-labelledby="about-education" className="py-12 md:py-16 lg:pl-[16rem]">
            <div>
              <h2 id="about-education" className="lettering text-[clamp(1.75rem,3.4vw,2.75rem)]">
                Education
              </h2>
              <ol className="mt-8 border-t-4 border-ink">
                {EDUCATION.map((e) => (
                  <li key={e.school} className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-6 border-b border-ink/15 py-6 sm:grid-cols-[4.5rem_6rem_minmax(0,1fr)]">
                    {e.logo ? (
                      <img src={e.logo} alt="" width={72} height={72} className="h-[4.5rem] w-[4.5rem] object-contain" />
                    ) : (
                      <span aria-hidden="true" />
                    )}
                    <p className="lettering tabular hidden pt-1 text-2xl text-court sm:block">{e.year}</p>
                    <div>
                      <h3 className="font-display text-xl font-bold leading-snug">{e.school}</h3>
                      <p className="mt-1 text-lg text-ink-soft">{e.degree}</p>
                      <p className="label tabular mt-2 text-court">
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
