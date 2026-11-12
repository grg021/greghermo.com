import { MAIN_ACTION } from '../header'

/*
 * Hero: the dealt `split` (layout-v4.md). Words on span-5 with three real facts at the column's
 * foot, Greg's portrait on span-6 start-7, one flat float card with a live fact.
 */
const FACTS = [
  { dt: 'Building since', dd: '2008' },
  { dt: 'Companies co-founded', dd: '3' },
  { dt: 'IdeaSpace PH', dd: '2015 winner' },
]

export default function Hero() {
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker">Greg Hermo</p>
            <h1 id="hero-h">Software engineer in Laguna, PH</h1>
            <p className="hero__lead">
              I build software the way I play tennis: pick one shot, put in the reps, get a little better every day.
              Today that means Laravel and React at ContactOut, and the health systems I&rsquo;ve built with Ateneo since 2011.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={MAIN_ACTION.href}>
                {MAIN_ACTION.label}
                <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
                  <path className="m-arrow__stem" d="M1 6h8" />
                  <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
                </svg>
              </a>
              <a className="btn btn--secondary" href="#writing">
                Read my writing
              </a>
            </div>
            <dl className="hero-facts">
              {FACTS.map((f) => (
                <div key={f.dt}>
                  <dt>{f.dt}</dt>
                  <dd>{f.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__media span-6 start-7">
            {/* The 400px original, upscaled 4x with Real-ESRGAN and blended with a plain resize to keep skin texture. A real photo 1300px+ wide should replace it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/greghermo-portrait-1300.jpg"
              width={1300}
              height={1248}
              alt="Greg Hermo smiling and giving a thumbs up in a running shirt"
              style={{ ['--ly-pos' as string]: '50% 35%' }}
              fetchPriority="high"
              data-source="client"
              data-subject="portrait of Greg"
            />
            <div className="ly-float">
              <div className="ly-float__row">
                <span className="ly-live">Now</span>
                <span>Since 2021</span>
              </div>
              <div className="ly-float__title">Senior software engineer at ContactOut</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
