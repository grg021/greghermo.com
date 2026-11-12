import { WORK } from '../../lib/work'

/*
 * Work: the seven roles as rows on the left; on the right one still hub diagram (diagrams.md, one
 * a service page, held still) of the tools Greg builds with, in their real logos.
 */
const STACK = {"layout":"hub","alt":"Greg at the centre of what he builds with. Backend: Laravel, PHP and MySQL. Web: React, Next.js, Vue.js and Tailwind CSS. Mobile: Expo. AI coding: Claude and Cursor. Shipping: Docker.","center":{"label":"Greg"},"spokes":[{"label":"Backend","icon":"ui:server","children":[{"label":"Laravel","icon":"laravel"},{"label":"PHP","icon":"php"},{"label":"MySQL","icon":"mysql"}]},{"label":"Web","icon":"ui:monitor","children":[{"label":"React","icon":"react"},{"label":"Next.js","icon":"nextjs"},{"label":"Vue.js","icon":"vue"},{"label":"Tailwind CSS","icon":"tailwindcss"}]},{"label":"Mobile","icon":"ui:smartphone","children":[{"label":"Expo","icon":"expo"}]},{"label":"AI coding","icon":"ui:bot","children":[{"label":"Claude","icon":"claude"},{"label":"Cursor","icon":"cursor"}]},{"label":"Shipping","icon":"ui:rocket","children":[{"label":"Docker","icon":"docker"}]}],"ground":"none","motion":{"pulse":"none"}}

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="section-head section-head--row">
          <div>
            <h2 id="work-h">
              Seven teams since 2008. <span className="muted">Lab to coffee shop.</span>
            </h2>
          </div>
          <a className="link" href="/about#work">
            Read the full history
          </a>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-6">
            {WORK.map((w) => (
              <li key={w.name}>
                <span className="rows__name">
                  {w.link?.href.startsWith('/') ? (
                    <a className="link" href={w.link.href}>
                      {w.name}
                    </a>
                  ) : (
                    w.name
                  )}
                  <small>{w.role}</small>
                </span>
                <span className="rows__value">
                  {w.period.endsWith('present') ? (
                    <>
                      {w.period.replace(' – present', ' – ')}
                      <span className="work__now">now</span>
                    </>
                  ) : (
                    w.period
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="span-6 start-7">
            <div className="panel work__stack" data-icon-base="/kit/icons/">
              <div className="dg" data-diagram={JSON.stringify(STACK)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
