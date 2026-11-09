---
name: Greg Hermo
description: A personal home base laid out as a painted hard court, with a club scoreboard and a white scoresheet for reading.
colors:
  court: "#2D5B88"
  court-mist: "#D7E3EF"
  surround: "#3E7350"
  surround-deep: "#33603F"
  surround-mist: "#DCEADF"
  line: "#FFFFFF"
  board: "#14202B"
  board-rule: "#2B3A48"
  board-mist: "#C7D1DA"
  ball: "#F2C14E"
  ink: "#14202B"
  ink-soft: "#3E4C59"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 8.4vw, 8.25rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'onum' 1"
  voice:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.375
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  panel-x: "64px"
  panel-y: "80px"
  section: "128px"
  line: "4px"
  frame: "6px"
components:
  nav-link:
    textColor: "{colors.line}"
    typography: "{typography.label}"
    padding: "0 0 4px 0"
  scoreboard-cell:
    backgroundColor: "{colors.board}"
    textColor: "{colors.line}"
    padding: "20px 24px"
  scoreboard-value:
    textColor: "{colors.ball}"
  panel-board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.line}"
    rounded: "{rounded.none}"
    padding: "80px 64px"
  panel-sheet:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "80px 64px"
  court-frame:
    backgroundColor: "{colors.court}"
    textColor: "{colors.line}"
    rounded: "{rounded.none}"
  link-sheet:
    textColor: "{colors.court}"
    typography: "{typography.label}"
  link-sheet-hover:
    textColor: "{colors.ink}"
  skip-link:
    backgroundColor: "{colors.ball}"
    textColor: "{colors.ink}"
    padding: "12px 16px"
---

# Design System: Greg Hermo

## Overview

**Creative North Star: "The Hard Court"**

The site is a tennis venue seen from above. A matte blue court sits inside a green surround; white painted lines divide it with real court proportions (78 by 36 ft: singles alleys at 12.5%, service lines at 23.1% from each baseline). The content lives where things live at a club: the name is painted on the court, the four pillars are kept on a black club scoreboard with amber values, work is posted on a results board, and anything meant for reading is set on a white scoresheet. The athlete mindset is the structure, not a decoration on top of it.

Everything is flat paint. There is no radius, no shadow and no gradient, because a painted court has none; depth is the order of materials (surround, court, line, board, sheet), never light. Density is calm: long vertical rhythm between sections, generous panel padding, measured serif text. Painted lettering (Archivo at its widest, heavy caps) carries names and section titles; Source Serif 4 carries Greg's own voice.

It refuses the dark-slate developer portfolio: gradient names, particle fields, tool-chip grids and card grids.

**Key Characteristics:**
- Flat painted materials in a fixed set: court blue, surround green, line white, board black, ball amber.
- White lines are solid bars of fixed width (4px lines, 6px frames and nets) that stop at painted lettering boxes.
- Wide heavy caps for anything painted; a serif for anything spoken or read.
- Square corners everywhere, including photographs and code blocks.
- Motion is a club's motion: lines paint in once, scoreboard values flap over, and the hero court plays a point.

## Colors

A small venue palette: two field colors, one paint, one board and one amber that only ever appears as a score or an action.

### Primary
- **Matte Court Blue** (court): the playing surface. Fills the hero court, the Journey court, inner-page bands; on the white sheet it becomes the link and date color, and the list-marker color in prose.

### Secondary
- **Scoreboard Amber** (ball): the scoreboard's lit numerals. Pillar values, Work years, external links on the board, the email underline, focus outlines, text selection and the skip link. It marks scores and actions, never fills a surface.

### Neutral
- **Run-off Green** (surround): the page ground around every court and panel; header and footer sit directly on it.
- **Shaded Run-off** (surround-deep): scrollbar track only.
- **Painted Line White** (line): court lines, frames, the net, all type on court and board, and the reading sheet itself.
- **Club Board Black** (board): the scoreboard strip, the Work results board, code blocks in posts.
- **Board Rule** (board-rule): hairline dividers and cell rules on the board; hover wash on scoreboard cells at 60%.
- **Board Mist** (board-mist): secondary text on the board (intro copy, roles, stack lines).
- **Court Mist** (court-mist): secondary text on court blue (second caption line, post dates in the band).
- **Surround Mist** (surround-mist): secondary text on the surround. Contrast against surround green is about 4.47:1, so it is for large text only (24px and up).
- **Scoresheet Ink** (ink): headings and rules on the white sheet; `ink` at 15% opacity is the row divider there.
- **Soft Ink** (ink-soft): running body text and excerpts on the sheet.

### Named Rules
**The Five Materials Rule.** Every surface is surround, court, line, board, or sheet. A new surface picks one of these; no tints, washes, or blends between them.

**The Amber Is A Score Rule.** Ball amber marks a value, a link, or focus. It is never a background block bigger than the skip link, and never body copy.

**The Mist Belongs To Its Ground Rule.** Each mist is paired with its ground: court-mist on court, board-mist on board, surround-mist on surround. Never move a mist to another ground.

## Typography

**Display Font:** Archivo, variable width axis at 125 (with Arial Narrow, sans-serif)
**Body Font:** Source Serif 4, roman and italic (with Georgia, serif)

**Character:** Painted court lettering against a writer's serif. The Archivo is pushed to its widest and heaviest so it reads as paint stencilled on a surface; the serif is quiet, oldstyle-numeral, and carries everything Greg says in his own voice.

### Hierarchy
- **Display** (800, wdth 125, uppercase, clamp up to 8.25rem, line-height 0.9): the name in the hero, inside its lettering box. One per page.
- **Headline** (800, wdth 125, uppercase, clamp(2rem, 4vw, 3rem), 0.9): section titles on the homepage (Work, Journey, Writing, Say hello). Deliberately small beside the hero name: the name is the only display-size lettering on the page. Inner-page band titles and About section titles keep their own steps; Journey pillars use about 1.75rem.
- **Work entries** are set as Title (Archivo 700, mixed case), not lettering, with role and dates in the serif; uppercase tracked labels are kept for nav, scoreboard keys, dates on the sheet, stack lines and links.
- **Title** (Archivo 700 at normal width, mixed case, 1.5rem to 2rem, 1.25): post titles in lists, school names, prose headings. This is the reading-side heading; it is not painted, so it is not uppercase or expanded.
- **Body** (Source Serif 4 400, 1.125rem to 1.1875rem, 1.625, max 68ch): all running text. Oldstyle numerals by default.
- **Voice** (Source Serif 4 italic, clamp to about 1.75rem, 1.375): Greg's own line under the name, page-band intros, the Journey quote.
- **Label** (Archivo 700, 0.8125rem, 0.16em, uppercase): navigation, scoreboard keys, roles, stack lines, dates, footer links. Labels name a value or an action; they never sit alone above a heading as a lead-in.

### Named Rules
**The One Loud Thing Rule.** The hero name is the only display-size lettering on the homepage. Section titles stay at headline size (3rem at most); the page is loud once, then calm.

**The Paint Or Voice Rule.** Expanded heavy caps for anything painted on a surface (names, section titles, scores); the serif for anything spoken or read. Do not set paragraphs in Archivo or titles in the serif.

**The Tabular Score Rule.** Years, dates and scoreboard values switch to tabular lining numerals; everywhere else, numerals stay oldstyle.

## Layout

One centered column capped at 82rem (the court width), with 16px side gutters on phones and 32px from small screens up; the surround shows in the gutters. Sections are stacked full-width panels separated by 96px (128px from md) of open surround. Panels pad 20px to 64px horizontally and 56px to 80px vertically as the viewport grows.

The hero court is landscape (78:36) from lg and turns portrait below, so the court still reads as a court on a phone: a real 36:78 court on phones (taller 36:56 on tablets), the name centred in the far half and the portrait in the near one, with the service lines stopping at their lettering boxes and the net in the first screen. The hero leaves 32px of surround above the court for the rally board. The scoreboard is two columns on phones and four from lg.

Lists inside panels are ruled tables, not cards: a fixed left column (7rem to 8rem) for the year or date, then title and body, with a heavy 4px top rule and hairline row dividers. Reading text never exceeds 68ch.

## Elevation & Depth

This system has no shadows. Depth is the order of painted materials: the surround is the ground, the court and panels sit on it, lines and frames are painted on the court, and the white sheet is a separate page laid on the surround. Separation comes from color fields, 4px and 6px white bars, and rules; never from blur or offset.

### Named Rules
**The Flat Paint Rule.** No box-shadow, no drop-shadow, no gradient, no backdrop blur, on any element in any state.

## Shapes

Square everywhere (0px), with one exception: the ball is round, because it is a ball. Courts, panels, scoreboard cells, the portrait frame, cover images, code blocks and focus outlines all have hard corners. White strokes are fixed: 4px for court lines and nav underlines, 6px for court frames, the net and the portrait frame, 4px for the top rule of a list on the sheet. Lines stop where a lettering box (a court-blue patch behind the type) sits, so the paint never runs through a word.

### Named Rules
**The Lettering Box Rule.** Type placed over court lines sits on its own court-blue patch with a few pixels of padding, and the lines stop at its edge. Never let a line cross lettering, and never lift type off the court with a shadow.

## Components

### Navigation
Painted labels on the surround. The wordmark is display lettering at about 1.375rem, white, turning amber on hover. Links are white labels with a 4px bottom bar: transparent at rest, white on hover and on the current page (aria-current). Stacks under the wordmark on phones, inline to the right from md.

### Scoreboard
The signature component. A board-black strip under the hero court, split into cells by board-rule lines. Each cell is a link: a white label on the left, an amber lettering value on the right with tabular numerals. Values flap over like a flip board on load (staggered 140ms per cell) and flap again on hover and keyboard focus; the cell washes with board-rule at 60% on hover.

### Rally (hero court)
After the lines paint and the scoreboard flaps, Greg serves an amber ball from his baseline (the portrait's half) into the visitor's half (the name's half). The visitor aims a return by clicking or tapping his half: in the singles court is "In" and he returns it, the alleys are "Out" (a court-mist Hawk-Eye mark stays where it bounced), and their own half is "Net". After a miss the ball leaves and he serves again. The ball travels on transform only; its height is shown by scale (1 → 1.6 → 1), never a shadow, and it rests only off the lettering boxes and portrait (`data-rally-avoid`). An umpire's board stands on the surround above the court frame beside the net post: board black, "Rally" label, amber two-digit count, and the call in board-mist; values flap in. The ball is a button, so keyboard users can play a good shot. Under reduced motion the ball moves without travel and the calls still change.

### Court Frame
A court-blue field inside a 6px white frame with 4px painted lines at real court proportions, plus a 6px net that runs past the sidelines. Used for the hero, the Journey court (the four pillars in the four service boxes, separated by 4px gaps that show white ground), and as the Page Band on inner pages (one baseline, one service line, title in a lettering box). Lines paint in once on load.

### Panels
- **Results board** (board): Work on the homepage, one line per role: amber year, white title-style name, board-mist role and dates in the serif, amber link with a square-capped arrow. Rows share one subgrid so the columns align. The full entries (body, stack) are on About.
- **Scoresheet** (line, with ink text): Writing, About, post lists, post bodies. Court-blue dates and links, title-style headings that underline in court blue (3px, 6px offset) on hover, ink-soft body.

### Links
- **On the sheet:** court-blue label, 2px underline, turning ink on hover.
- **In prose:** court blue, 2px underline at 0.22em offset.
- **Email in the footer:** large serif in white with a 4px amber underline, turning amber on hover.

### Focus and Selection
Every focusable element gets a 3px solid amber outline at 3px offset. Text selection is amber with ink text. The skip link is an amber label block with ink text, fixed top-left when focused.

### Motion
Lines paint in with a scale transform (900ms, cubic-bezier(0.16, 1, 0.3, 1)) once on load; scoreboard values flap in from a blank tile (520ms, same curve: the face drops from its top edge, so the load reveals the value) and flap over again on hover and focus. The rally ball travels on cubic-bezier(0.3, 0.05, 0.25, 1) for 460 to 1000ms by distance, then skids 34px on the settle curve. Color changes run 200ms. Under reduced motion every animation and transition collapses to 1ms, so the court arrives already painted.

## Do's and Don'ts

### Do:
- **Do** build every surface from the five materials: surround, court, line, board, sheet.
- **Do** draw court geometry with solid white bars (4px lines, 6px frames and nets) at real court proportions.
- **Do** put type that crosses court lines on a court-blue lettering box so the lines stop at its edge.
- **Do** set names, section titles and scores in Archivo 800 at wdth 125, uppercase, line-height 0.9; set everything read or spoken in Source Serif 4.
- **Do** use ball amber only for scores, years, links on dark grounds, focus and selection.
- **Do** present lists as ruled tables with a fixed year or date column, not as cards.
- **Do** keep motion to paint-in, flap and the rally ball, and make it static under reduced motion.

### Don't:
- **Don't** round any corner, including images and code blocks (0px everywhere).
- **Don't** use box-shadows, gradients, glows or blur; depth is material order.
- **Don't** reintroduce the dark-slate developer portfolio: gradient names, particle backgrounds, tool-chip grids, card grids.
- **Don't** put a small uppercase label above a heading as a lead-in; labels name a value or an action.
- **Don't** set small text in surround-mist or amber on the green surround; both fall below 4.5:1 there.
- **Don't** move a mist color off its own ground.
