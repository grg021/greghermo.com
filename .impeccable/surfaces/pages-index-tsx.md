---
version: 1
slug: "pages-index-tsx"
primary_target: "pages/index.tsx"
related_targets: ["pages/about.tsx","pages/posts/index.tsx"]
---

# Homepage (and shared shell: About, Writing)

Scope: `pages/index.tsx` plus the shared header/footer; About and the posts pages inherit the world. Visitor mode: Experience (a personal home base; the person leads from the first viewport).

Audience and job: people who know of Greg or just met him look him up to understand who he is. Story first. Keep: personal journey (faith, family, tennis) and recent posts. Dropped: the tech-stack chip grid and the separate Ventures section (Bo's Coffee becomes a row in Work). Must not feel flashy/techy, corporate, or treat faith as an afterthought.

## Direction contract

THESIS: Greg's athlete mindset is the page's structure: a painted hard court lays out the first viewport and a club scoreboard keeps his four pillars. Refuses the dark-slate developer portfolio (gradient name, particles, tool chips, card grids).

OWN-WORLD: matte court blue #2D5B88 inside a green surround #3E7350, 2-inch white painted lines that stop at painted lettering boxes, club scoreboard black #14202B with amber #F2C14E numerals, white scoresheet for reading. Archivo at expanded width, heavy caps, for painted lettering; Source Serif 4 for his voice. No radius, no shadows, no gradients.

STORY: visitors learn who Greg is (a calm, disciplined builder who honors God), see what he builds (ContactOut, Bo's Coffee Calamba, the inventory tool, Vinteo), understand what drives him (faith, family, craft, court), then read his writing or write to him.

FIRST VIEWPORT: green surround with the wordmark and nav on top; a full-width court with doubles, singles, service and centre lines and the net. GREG / HERMO at about 130px fills the left half in a lettering box, with his line in serif italic below it; a square portrait with a white painted frame stands in the right service box; a scoreboard strip under the baseline reads Faith First · Family Present · Craft Since 2009 · Court Levelling up, each cell linking to its pillar. On phones the court turns portrait.

FORM: The Hard Court, Impeccable's pick (rank 1 of 7 grounded; the roll assigned rank 4, The Yearbook Entry). seed:5661ba8d75daa5cc. Signature interaction: the court lines paint in once on load, then the scoreboard values flap over like a club flip board (again on hover and focus); Journey's four pillars sit in the four service boxes. Motion is static under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Project metrics (40% latency, 15% wastage, 5 h/week) are unconfirmed and left out.
- Portrait source is only 400x384px; a larger photo would sharpen the hero.
