import { RefObject, useEffect, useRef, useState } from 'react'

/*
 * A point played on the hero court. Greg's side is the portrait's half, the
 * visitor's is the name's half. After the lines paint, Greg serves; the visitor
 * aims a shot by clicking (or tapping) his half. In the singles court is a good
 * shot and he returns it; the alleys are out; their own half is the net.
 *
 * Positions are kept as fractions of the court's inner box, so they survive
 * resizes. Motion is the Web Animations API on transform only. Under reduced
 * motion the ball moves without travel and the calls still change.
 */

type Pt = { x: number; y: number }
type Box = { x0: number; y0: number; x1: number; y1: number }
type Side = 'visitor' | 'greg'

const TRAVEL = 'cubic-bezier(0.3, 0.05, 0.25, 1)'
const SETTLE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const SERVE_AFTER = 1900 // after the lines paint and the scoreboard flaps
const HIT = 36 // hit target around the ball, px
const SINGLES = [0.125, 0.875] // singles sidelines, as fractions across the net

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
const rand = (a: number, b: number) => a + Math.random() * (b - a)
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

const isLandscape = () => window.matchMedia('(min-width: 1024px)').matches
const isReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isCoarse = () => window.matchMedia('(pointer: coarse)').matches

/* "along" crosses the net; "across" runs beside it. Landscape: net is vertical. */
const along = (p: Pt, land: boolean) => (land ? p.x : p.y)
const across = (p: Pt, land: boolean) => (land ? p.y : p.x)
const make = (a: number, c: number, land: boolean): Pt => (land ? { x: a, y: c } : { x: c, y: a })
const inside = (p: Pt, b: Box) => p.x > b.x0 && p.x < b.x1 && p.y > b.y0 && p.y < b.y1

async function run(el: HTMLElement, frames: Keyframe[], opts: KeyframeAnimationOptions) {
  const a = el.animate(frames, { fill: 'forwards', ...opts })
  try {
    await a.finished
  } catch {
    return // cancelled
  }
  a.commitStyles()
  a.cancel()
}

type Props = { courtRef: RefObject<HTMLDivElement | null> }

export default function Rally({ courtRef }: Props) {
  const wrapRef = useRef<HTMLButtonElement>(null)
  const discRef = useRef<HTMLSpanElement>(null)

  const pos = useRef<Pt>({ x: 0.5, y: 0.5 })
  const land = useRef(true)
  const gen = useRef(0) // bumps to abandon a running point
  const ready = useRef(false)
  const played = useRef(false)
  const hitRef = useRef<() => void>(() => {})

  const [rally, setRally] = useState(0)
  const [call, setCall] = useState('')
  const [shown, setShown] = useState(false)
  const [canHit, setCanHit] = useState(false)
  const [mark, setMark] = useState<Pt | null>(null)

  useEffect(() => {
    const court = courtRef.current
    const wrap = wrapRef.current
    const disc = discRef.current
    if (!court || !wrap || !disc) return

    const size = () => ({ W: court.clientWidth, H: court.clientHeight })
    const tr = (p: Pt) => {
      const { W, H } = size()
      return `translate(${p.x * W - HIT / 2}px, ${p.y * H - HIT / 2}px)`
    }
    const place = (p: Pt) => {
      pos.current = p
      wrap.style.transform = tr(p)
    }

    /* Lettering boxes and the portrait: the ball never rests on them. */
    const avoid = (): Box[] => {
      const r = court.getBoundingClientRect()
      const ox = r.left + court.clientLeft
      const oy = r.top + court.clientTop
      const { W, H } = size()
      const m = 8
      return Array.from(court.querySelectorAll<HTMLElement>('[data-rally-avoid]')).map((el) => {
        const b = el.getBoundingClientRect()
        return { x0: (b.left - ox - m) / W, y0: (b.top - oy - m) / H, x1: (b.right - ox + m) / W, y1: (b.bottom - oy + m) / H }
      })
    }
    const clear = (p: Pt) => !avoid().some((b) => inside(p, b))

    const spot = (side: Side, fixedAlong?: number): Pt => {
      const l = land.current
      for (let i = 0; i < 200; i++) {
        const a = fixedAlong ?? (side === 'visitor' ? rand(0.05, 0.47) : rand(0.55, 0.94))
        const p = make(a, rand(0.15, 0.85), l)
        if (clear(p)) return p
      }
      return make(fixedAlong ?? (side === 'visitor' ? 0.2 : 0.8), 0.5, l)
    }

    const fly = async (to: Pt, hump = 1.6) => {
      const from = pos.current
      pos.current = to
      if (isReduced()) return place(to)
      const { W, H } = size()
      const dist = Math.hypot((to.x - from.x) * W, (to.y - from.y) * H)
      const duration = clamp(380 + dist * 0.7, 460, 1000)
      await Promise.all([
        run(wrap, [{ transform: tr(from) }, { transform: tr(to) }], { duration, easing: TRAVEL }),
        run(
          disc,
          [{ transform: 'scale(1)' }, { transform: `scale(${hump})`, offset: 0.42 }, { transform: 'scale(1)' }],
          { duration, easing: 'ease-in-out' },
        ),
      ])
    }

    /* After the bounce the ball runs on a little in the same direction. */
    const skid = async (from: Pt, to: Pt, px = 34) => {
      const { W, H } = size()
      const dx = (to.x - from.x) * W
      const dy = (to.y - from.y) * H
      const len = Math.hypot(dx, dy) || 1
      const end = { x: clamp(to.x + (dx / len) * (px / W), 0.02, 0.98), y: clamp(to.y + (dy / len) * (px / H), 0.02, 0.98) }
      if (!clear(end)) return
      pos.current = end
      if (isReduced()) return place(end)
      await Promise.all([
        run(wrap, [{ transform: tr(to) }, { transform: tr(end) }], { duration: 420, easing: SETTLE }),
        run(disc, [{ transform: 'scale(1)' }, { transform: 'scale(1.12)', offset: 0.3 }, { transform: 'scale(1)' }], {
          duration: 420,
          easing: 'ease-out',
        }),
      ])
    }

    const awaitShot = () => {
      ready.current = true
      setCanHit(true)
      setCall(played.current ? 'Your shot' : isCoarse() ? 'Tap to return' : 'Click to return')
    }

    const start = async (g: number) => {
      if (g !== gen.current) return
      ready.current = false
      setCanHit(false)
      land.current = isLandscape()
      setMark(null)
      setRally(0)
      setCall('Greg serves')
      const from = spot('greg', 0.96)
      place(from)
      setShown(true)
      await wait(isReduced() ? 0 : 420)
      if (g !== gen.current) return
      const to = spot('visitor')
      await fly(to)
      if (g !== gen.current) return
      await skid(from, to)
      if (g !== gen.current) return
      awaitShot()
    }

    const endPoint = async (g: number) => {
      await wait(1500)
      if (g !== gen.current) return
      setShown(false)
      await wait(260)
      if (g !== gen.current) return
      await start(g)
    }

    const shoot = async (target: Pt) => {
      if (!ready.current) return
      ready.current = false
      setCanHit(false)
      played.current = true
      const g = gen.current
      const l = land.current
      const from = pos.current

      if (along(target, l) <= 0.5) {
        // Hit from their own half straight into the net.
        await fly(make(0.5 - 0.015, across(target, l), l), 1.25)
        if (g !== gen.current) return
        setCall('Net')
        return endPoint(g)
      }

      await fly(target)
      if (g !== gen.current) return
      const c = across(target, l)
      if (c < SINGLES[0] || c > SINGLES[1]) {
        setMark(target)
        setCall('Out')
        await skid(from, target)
        return endPoint(g)
      }

      setRally((r) => r + 1)
      setCall('In')
      await skid(from, target)
      if (g !== gen.current) return
      await wait(isReduced() ? 300 : 160)
      if (g !== gen.current) return
      setCall('Greg returns')
      const back = spot('visitor')
      const at = pos.current
      await fly(back)
      if (g !== gen.current) return
      await skid(at, back)
      if (g !== gen.current) return
      awaitShot()
    }

    // Keyboard (or a press on the ball itself): a good shot somewhere in Greg's half.
    hitRef.current = () => void shoot(spot('greg'))

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('[data-rally-avoid], a, button')) return
      const r = court.getBoundingClientRect()
      const { W, H } = size()
      const p = { x: (e.clientX - r.left - court.clientLeft) / W, y: (e.clientY - r.top - court.clientTop) / H }
      if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return
      void shoot(p)
    }
    court.addEventListener('click', onClick)
    court.style.cursor = 'crosshair'

    /* Keep the resting ball on its spot; a turn between portrait and landscape replays the serve. */
    const ro = new ResizeObserver(() => {
      if (isLandscape() !== land.current) {
        gen.current++
        wrap.getAnimations().forEach((a) => a.cancel())
        disc.getAnimations().forEach((a) => a.cancel())
        void start(gen.current)
      } else if (ready.current) {
        place(pos.current)
      }
    })
    land.current = isLandscape()
    ro.observe(court)

    const generation = gen
    const g = generation.current
    const timer = setTimeout(() => void start(g), isReduced() ? 0 : SERVE_AFTER)

    return () => {
      clearTimeout(timer)
      generation.current++
      ro.disconnect()
      court.removeEventListener('click', onClick)
      court.style.cursor = ''
      wrap.getAnimations().forEach((a) => a.cancel())
      disc.getAnimations().forEach((a) => a.cancel())
    }
  }, [courtRef])

  const onBall = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (ready.current) hitRef.current()
  }

  return (
    <>
      {/* Hawk-Eye mark where an out ball bounced. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-[10px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-court-mist transition-opacity duration-200 ${
          mark ? 'opacity-80' : 'opacity-0'
        }`}
        style={mark ? { left: `${mark.x * 100}%`, top: `${mark.y * 100}%` } : undefined}
      />

      <button
        ref={wrapRef}
        type="button"
        onClick={onBall}
        disabled={!canHit}
        aria-label="Hit the ball back over the net"
        style={{ width: HIT, height: HIT }}
        className={`absolute left-0 top-0 z-10 grid place-items-center transition-opacity duration-200 ${
          shown ? 'opacity-100' : 'pointer-events-none opacity-0'
        } ${canHit ? 'cursor-pointer' : 'cursor-default'}`}
      >
        {/* The one round thing on the court: it is the ball. */}
        <span ref={discRef} className="block size-3 rounded-full bg-ball lg:size-[14px]" />
      </button>

      {/* The umpire's board at the net post. */}
      <div
        role="status"
        aria-live="polite"
        className="absolute left-1/2 top-[-6px] z-20 flex -translate-x-1/2 -translate-y-full items-center bg-board lg:translate-x-6"
      >
        <span className="label px-3 py-1.5 text-line">Rally</span>
        <span className="border-l border-board-rule px-3 py-1.5 [perspective:600px]">
          <span key={rally} className="lettering tabular inline-block origin-top animate-flap-in text-[0.95rem] text-ball">
            {String(rally).padStart(2, '0')}
          </span>
        </span>
        <span className="label block min-w-[8.5rem] whitespace-nowrap border-l border-board-rule px-3 py-1.5 text-board-mist sm:min-w-[9.5rem]">
          <span key={call} className="inline-block origin-top animate-flap-in">
            {call || ' '}
          </span>
        </span>
      </div>
    </>
  )
}
