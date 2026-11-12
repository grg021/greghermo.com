/*
 * Journey: the dealt dark band, here on court blue, holding the dealt moment, word-highlight
 * (moments.md). Greg's origin story turns to ink word by word as it crosses the screen, the
 * dragon in ball yellow; the four things he keeps first sit under it as one row.
 */
const PILLARS = [
  { id: 'faith', title: 'Faith', body: 'I strive for excellence, not for my own glory, but for the mission God has given me.' },
  { id: 'family', title: 'Family', body: 'A supportive husband and a present father: guiding, disciplining and playing with my kids.' },
  { id: 'craft', title: 'Craft', body: 'I’d rather master one thing deeply than skim many. Execution shows the real problems.' },
  { id: 'court', title: 'Court', body: 'On the tennis court I chase the joy of levelling up: timing, consistency, good positioning.' },
]

export default function Journey() {
  return (
    <section
      className="section statement ground-inverse"
      id="journey"
      data-moment="word-highlight"
      aria-labelledby="journey-h"
      style={{ ['--hm' as string]: 2 }}
    >
      <div className="wrap">
        <h2 id="journey-h" className="t-label">
          A Pascal maze game, then four priorities
        </h2>
        <p className="mo-wh__text">
          In high school I wrote a two-level game in Pascal and Turbo C: a maze with hidden obstacles and a boss fight
          against a <strong>dragon</strong>. I still learn fastest by building.
        </p>
        <div className="grid journey__pillars">
          {PILLARS.map((p) => (
            <div className="span-3 stack-3" id={p.id} key={p.id}>
              <p className="t-card">{p.title}</p>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
