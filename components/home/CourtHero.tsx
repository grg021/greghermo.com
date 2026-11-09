import Image from 'next/image'
import { CSSProperties, useRef } from 'react'
import Rally from './Rally'

/*
 * A hard court seen from above. Lines are positioned from real court
 * proportions (78 x 36 ft): singles sidelines 4.5 ft in (12.5%), service
 * lines 18 ft from each baseline (23.1%). Landscape from lg, portrait below.
 */

type LineProps = { className: string; axis: 'x' | 'y'; delay: number }

function Line({ className, axis, delay }: LineProps) {
  const style: CSSProperties = { animationDelay: `${delay}ms` }
  return (
    <div
      aria-hidden="true"
      style={style}
      className={`absolute bg-line ${
        axis === 'x' ? 'h-1 origin-left animate-paint-x' : 'w-1 origin-top animate-paint-y'
      } ${className}`}
    />
  )
}

function LandscapeLines() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <Line axis="x" delay={0} className="inset-x-0 top-[12.5%]" />
      <Line axis="x" delay={60} className="inset-x-0 bottom-[12.5%]" />
      <Line axis="y" delay={160} className="bottom-[12.5%] left-[23.1%] top-[12.5%]" />
      <Line axis="y" delay={220} className="bottom-[12.5%] right-[23.1%] top-[12.5%]" />
      <Line axis="x" delay={320} className="left-[23.1%] right-[23.1%] top-[calc(50%-2px)]" />
      <Line axis="x" delay={380} className="left-0 top-[calc(50%-2px)] w-5" />
      <Line axis="x" delay={380} className="right-0 top-[calc(50%-2px)] w-5" />
      {/* The net runs past both sidelines to its posts. */}
      <Line axis="y" delay={440} className="-top-6 bottom-0 left-[calc(50%-3px)] w-[6px] bg-line/90" />
    </div>
  )
}

function PortraitLines() {
  return (
    <div className="pointer-events-none absolute inset-0 lg:hidden">
      <Line axis="y" delay={0} className="inset-y-0 left-[12.5%]" />
      <Line axis="y" delay={60} className="inset-y-0 right-[12.5%]" />
      <Line axis="x" delay={160} className="left-[12.5%] right-[12.5%] top-[23.1%] md:top-[31%]" />
      <Line axis="x" delay={220} className="bottom-[23.1%] left-[12.5%] right-[12.5%] md:bottom-[31%]" />
      <Line axis="y" delay={320} className="bottom-[23.1%] left-[calc(50%-2px)] top-[23.1%] md:bottom-[31%] md:top-[31%]" />
      <Line axis="y" delay={380} className="left-[calc(50%-2px)] top-0 h-5" />
      <Line axis="y" delay={380} className="bottom-0 left-[calc(50%-2px)] h-5" />
      <Line axis="x" delay={440} className="-left-3 -right-3 top-[calc(50%-3px)] h-[6px] bg-line/90" />
    </div>
  )
}

const PILLARS = [
  { id: 'faith', label: 'Faith', value: 'First' },
  { id: 'family', label: 'Family', value: 'Present' },
  { id: 'craft', label: 'Craft', value: 'Since 2008' },
  { id: 'court', label: 'Court', value: 'Levelling up' },
]

function Scoreboard() {
  return (
    <nav aria-label="What drives me" className="bg-board">
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ id, label, value }, i) => (
          <li
            key={id}
            className={`border-board-rule ${i % 2 === 1 ? 'border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''} ${
              i === 2 ? 'lg:border-l' : ''
            }`}
          >
            <a
              href={`#${id}`}
              className="group flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 text-line transition-colors duration-200 hover:bg-board-rule/60 sm:px-6 lg:py-5"
            >
              <span className="label">{label}</span>
              <span className="inline-block [perspective:600px]">
                <span style={{ animationDelay: `${1000 + i * 140}ms` }} className="inline-block origin-top animate-flap-in">
                  <span className="lettering tabular inline-block whitespace-nowrap text-[0.95rem] text-ball group-hover:animate-flap-again group-focus-visible:animate-flap-again sm:text-lg lg:text-[0.875rem] xl:text-lg">
                    {value}
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function CourtHero() {
  const courtRef = useRef<HTMLDivElement>(null)
  return (
    <section aria-labelledby="hero-name" className="px-4 pt-8 sm:px-8">
      <div className="mx-auto max-w-court">
        <div ref={courtRef} className="relative aspect-[36/78] border-[6px] border-line bg-court md:aspect-[36/56] lg:aspect-[78/36]">
          <PortraitLines />
          <LandscapeLines />

          {/* Phones and tablets: name centred in the far half, portrait in the near one, the service lines stopping
              at their lettering boxes (phones get a real 36:78 court).
              Desktop: name in the left half, portrait in the right service box. */}
          <div className="relative grid h-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="flex flex-col items-start justify-center px-[16%] lg:pl-[6%] lg:pr-[4%]">
              {/* One painted lettering panel: the lines stop once at its edge. */}
              <div data-rally-avoid className="relative z-[15] w-fit cursor-auto bg-court px-2 py-1">
                <h1 id="hero-name" className="lettering text-[clamp(2.25rem,11vw,6rem)] lg:text-[clamp(4.5rem,8.4vw,8.25rem)]">
                  Greg
                  <br />
                  Hermo
                </h1>
                <p className="mt-3 max-w-[24ch] font-serif lg:max-w-[26ch] text-[clamp(1.0625rem,4.4vw,1.75rem)] italic leading-snug text-line lg:mt-7 lg:text-[clamp(1.375rem,2vw,1.875rem)]">
                  A calm, disciplined builder who honors God and pursues mastery in everything he does.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-[16%] lg:items-end lg:px-0 lg:pr-[9%]">
              <figure data-rally-avoid className="relative z-[15] cursor-auto bg-court p-2">
                <div className="relative mx-auto aspect-[400/384] w-[min(14rem,50vw)] flex-none md:w-[min(16rem,34vw)] lg:mx-0 border-[6px] border-line lg:w-[clamp(15rem,20vw,19rem)]">
                  <Image
                    src="/assets/img/greghermo_profilepic.JPG"
                    alt="Portrait of Greg Hermo"
                    fill
                    priority
                    sizes="(min-width: 1024px) 19rem, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 space-y-1 text-center lg:mt-4 lg:text-left">
                  <span className="label block text-line">Senior Software Engineer, ContactOut</span>
                  <span className="label block text-court-mist">Co-founder, Bo’s Coffee Calamba</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <Rally courtRef={courtRef} />
        </div>
        <Scoreboard />
      </div>
    </section>
  )
}
