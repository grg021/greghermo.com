import { Fragment } from 'react'

/*
 * The four pillars sit in the four service boxes of a full court. Painted lines
 * are borders and 4px gaps showing the white ground between court-blue boxes.
 */

const PILLARS = [
  {
    id: 'faith',
    title: 'Faith',
    body: 'My identity in Christ is my foundation. My drive for mastery and impact is rooted in stewardship: taking care of what God has blessed us with.',
  },
  {
    id: 'family',
    title: 'Family',
    body: 'I’m called to be a supportive husband and a present father: guiding, disciplining and playing with my kids.',
  },
  {
    id: 'craft',
    title: 'Craft',
    body: 'I first felt alive in high school, writing Pascal and Turbo C. I still learn fastest by building.',
  },
  {
    id: 'court',
    title: 'Court',
    body: 'On the tennis court I’m drawn to the joy of levelling up: relaxation, consistency, timing and good positioning.',
  },
]

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="scroll-mt-6 px-4 pt-24 sm:px-8 md:pt-32">
      <div className="mx-auto max-w-court">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 id="journey-title" className="lettering text-[clamp(2rem,4vw,3rem)] text-line">
            Journey
          </h2>
          <blockquote className="max-w-[44ch] text-balance font-serif text-[clamp(1.25rem,2.2vw,1.625rem)] italic leading-snug text-line lg:pb-1">
            “I strive for excellence, not for my own glory, but to make an impact for the mission God has given me.”
          </blockquote>
        </div>

        {/* A whole court: back courts and alleys in court blue, the four pillars in the four service
            boxes. Faith and Family share one side of the net, Craft and Court the other. */}
        <div className="relative mt-10 border-[6px] border-line bg-court px-3 py-16 sm:px-5 md:mt-12 md:px-[9%] md:py-6">
          <div aria-hidden="true" className="absolute inset-y-0 left-3 w-1 bg-line sm:left-5 md:hidden" />
          <div aria-hidden="true" className="absolute inset-y-0 right-3 w-1 bg-line sm:right-5 md:hidden" />
          <div aria-hidden="true" className="absolute inset-x-0 top-6 hidden h-1 bg-line md:block" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-6 hidden h-1 bg-line md:block" />

          {/* One shared 2x2 grid so the centre service line runs straight through the net.
              Column gap (6px) is the net inside the frame; the absolute strip carries it past. */}
          <div className="relative grid gap-1 border-4 border-line bg-line md:grid-cols-2 md:grid-rows-2 md:gap-x-[6px]">
            <div aria-hidden="true" className="absolute -bottom-12 -top-12 left-[calc(50%-3px)] hidden w-[6px] bg-line md:block" />
            {PILLARS.map(({ id, title, body }, i) => (
              <Fragment key={id}>
                {i === 2 && <div aria-hidden="true" className="-mx-5 -my-1 h-[6px] bg-line sm:-mx-7 md:hidden" />}
                <article
                  id={id}
                  className={`scroll-mt-6 bg-court px-5 py-8 sm:px-8 md:py-10 lg:px-12 lg:py-12 ${
                    ['md:col-start-1 md:row-start-1', 'md:col-start-1 md:row-start-2', 'md:col-start-2 md:row-start-1', 'md:col-start-2 md:row-start-2'][i]
                  }`}
                >
                  <h3 className="lettering text-[clamp(1.375rem,2.2vw,1.75rem)] text-line">{title}</h3>
                  <p className="mt-4 max-w-measure text-lg leading-relaxed text-line">{body}</p>
                </article>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
