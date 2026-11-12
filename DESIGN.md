---
name: Greg Hermo
description: An athlete-builder's home base. Chalk-white ground, navy ink, court-blue actions, and one court-blue band where the tennis-ball yellow lives. Built on the tasteskill kit in public/kit.
colors:
  ground: "#f3f2ec"
  surface: "#e7e6de"
  ink: "#0e1b2c"
  muted: "#55606d"
  court: "#1f4f8a"
  band: "#173a63"
  band-surface: "#1f4675"
  band-ink: "#f3f2ec"
  band-muted: "#c3cedb"
  ball: "#dff04a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontWeight: 400
    fontStretch: "110% (125% for the hero h1)"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
rounded:
  sharp: "4px / 6px / 8px (data-radius=sharp)"
---

# Design System: Greg Hermo

## Overview

**Direction: the athlete-builder.** Greg trains for code the way he trains for tennis, so the site borrows a tennis palette without drawing a court: chalk-white ground, navy ink, court-blue buttons and links, and a single court-blue band where the ball yellow appears. Archivo, a wide grotesque, carries every word; the hero h1 runs at its full 125% width as the one loud line.

The page is built with the tasteskill kit (`.claude/skills/design-taste-frontend`). Its files are copied to `public/kit` and never edited. Everything that differs from the kit is listed below.

## The deal (tasteskill)

- Kind: **service** (`<html data-type="service">`, site-kind `other`): photographs, flat colour, type, real icons; no effects.
- Hero `split`: words on span-5 with three real facts at the foot, the portrait on span-6 start-7, one float card.
- Nav `nav-centre`, footer `footer-columns`, close `close-type`, rhythm `dark-band`, buttons `block`, mark `ring`.
- Palette: the client's own colours via `start.mjs brand` (court blue, navy, chalk), with the inverse ground set to court blue and its accent to ball yellow.
- Type: `archivo` (Archivo, width axis), weights 400 and 500 only.
- Moment: `word-highlight` on the Journey band (the Pascal maze game story; "dragon" turns ball yellow).
- One still `hub-tools` diagram in Work (Greg and the eight tools he builds with, real logos).

## Colour rules

- The interface stays neutral: ground, ink, muted. Court blue is the one accent on light grounds (primary button, links, focus).
- **Ball yellow lives only on the court-blue band** (`.ground-inverse`): the moment's strong word and the pillar names. Never on the chalk ground: it fails contrast there.
- No violet, no gradients, no shadows.

## Layout rules (from the kit)

- Every section is exactly one or two screens tall (`--h`, `--hm` on a phone); the hero alone fills the first screen.
- One `.wrap` (1280 wide, 80px gutters on desktop) for header, sections and footer; equal left and right edges.
- `footer.closing` is the close and the footer in one last screen.

## Implementation notes

- Kit CSS loads in `pages/_document.tsx` as `@import … layer(kit)`, ordered `theme, base, kit, components, utilities`: the kit beats Tailwind's preflight, and Tailwind utilities can still adjust inner pages. `motion.css` is linked unlayered.
- Kit scripts (`system.js`, `motion.js`, `layout.js`, `diagrams/mount.js`) are injected after hydration in `pages/_app.tsx`. Page-to-page links are plain `<a>`, so every page load reruns them.
- Tailwind scans only `pages`, `components` and `lib`, minus `components/home`, `header.tsx` and `footer.tsx`. Those files use kit classes (`grid`, `start-7`, `span-6`) that share names with Tailwind utilities.
- Inner pages (About, eHealth, posts) use Tailwind tokens mapped to the same palette in `styles/index.css` (`ground`, `sheet`, `ink`, `muted`, `accent`, `rule`, `night`), plus `.display` and `.meta`.

## Don'ts

- Don't edit `public/kit`; copy a fresh kit file from the skill if one needs updating.
- Don't put ball yellow on the light ground or use it for body text.
- Don't use weights above 500, tracked capitals or italic outside quotes.
- Don't add a second button style, radius family or link look.
