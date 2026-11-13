# Writing in Greg's voice

How Greg writes, drawn from his own posts in `_posts/` (2014 to 2023). Use this whenever you draft or edit a blog post for him. The goal is a post he could have written himself: same voice, cleaner copy.

## The voice in one paragraph

Greg writes like he's telling a colleague or a friend what happened and what he learned. He speaks in the first person, starts from something real (a task at work, a training he took, a slow query, a family event) and stays concrete: dates, versions, numbers, names. He's openly honest about what he doesn't know ("I am not quite sure why this is slow", "My hunch is…"), warm and grateful toward people, and practical about what to do next. He isn't trying to sound like an authority; he's sharing what worked for him.

## What his posts do

**Open with the real situation, in one or two plain sentences.** No throat-clearing, no "In today's fast-paced world".
- "For a while now I've been on a constant search for growth and learning."
- "Unit tests are indeed super helpful but sometimes it is challenging to build them."
- "When working with big numbers of data in MySQL (10M+ records) or 300GB+ sized database tables, we often would reach for lazyById or lazy"
- "Last Nov 9–13, I took up Core 1 and Core 2 of LabVIEW…"

**Write from experience, not from theory.** Claims are anchored to what he did: "In my experience…", "Personally, this has saved me and my team a lot of time…", "Looking back, the most impactful step for me would be the planning part." A case study beats a principle (see the restrict-user ticket in *Two sides of a coin*).

**Be specific.** Timelines ("Planning started around June 28, 2022 and the feature was already live on August 8, 2022"), versions ("Laravel 4.2", "ERPNext version 14"), measurements ("-- 197ms" vs "-- 11.1s"), places (Crimson Hotel, Alabang; GT Toyota, UP Diliman), people by first name.

**Admit uncertainty and limits.** "I don't think I have to be great or super good at all these technologies (I don't think I can be)." Keep these; they're a big part of why the voice feels honest.

**Use parenthetical asides** for context or a small joke: "(Laravel 4.2)", "(up to now)", "(it may be a final class that is not easily mockable)", "(he also officiated our wedding)".

**Reach for everyday analogies:** a diet plan you have to actually follow, two sides of a coin, a child as an arrow that needs straightening and releasing.

**Credit and link sources.** He links the Stack Overflow thread, the article that explains late row lookups, Laracasts, Adam Wathan. He thanks people by name at the end of personal posts.

**Close with a takeaway or the next step**, short and forward-looking, never a formal "In conclusion":
- "Now let's apply. Just like a "diet" plan you have to follow it in order to get healthier."
- "Next step, I'll be taking the certification exam this Nov 24. Please pray that I'll be able to prepare well and do my best. :)"
- "Overall, very happy with how things turned out."
- Sometimes a quote that sums it up, with attribution.

## Shape and formatting

- **Short paragraphs**, often one to three sentences. Single-line paragraphs for emphasis are fine.
- **Headings:** `##` sections for longer posts; bold lead-ins (`**Planning**`, `**Live site** — …`) for smaller beats. Headings are plain and literal ("Get backup files", "Restore", "Late row lookup"), occasionally with a nickname ("LazyById aka "seek method"").
- **Bullet lists** for concrete items: resources, steps, pros and cons, what he did. Bullets are fragments, not full paragraphs.
- **Bold** for the one phrase per paragraph that matters ("**setting yourself up for success.**").
- **Emoji, sparingly, as markers**, not decoration: one at the front of a bold lead-in (💡 🚀 🏠 🧠) or one at the end of a sentence for tone (🚀 😃). Older personal posts use text emoticons instead (`:)` `:D` `;)`); match the register of the post.
- **Length:** most posts are 250 to 750 words. Don't pad.

### Technical posts

Problem → what he tried → what he found (with numbers) → the solution → how it looks in real code → where it came from. Example: *A faster Laravel Lazy Query Method*.
- Show the SQL or shell output he actually ran, including timings or version output.
- Explain the "why" in a sentence or two, then link the deeper source instead of re-explaining it.
- Show the Laravel/PHP version last, as the practical payoff. Playful names are welcome ("latezyById").
- How-to posts can be very lean: a one-line goal, the setup, the commands, a one-line "In my experience, it was very straight forward." (*Frappe ERPNext 14*).

### Work and career posts

Frame a principle as something he learned on the job, then prove it with a real case: what the task was, how he planned it, how he executed it, what he'd keep. Talk about teammates warmly and by first name. End with a lesson or a quote.

### Personal and faith posts

Open with a Scripture verse as a blockquote with its reference when it fits (*Inheritance, Reward, Arrow* opens with Psalm 127:3). Faith is stated plainly, not preached. Tell what happened with dates and places, include photos with short captions, and thank people by name. Affection is open and a little playful (":D", "We love you! :*").

## Words and phrases that sound like him

"Here's…", "Let's…", "Essentially…", "In my experience…", "Personally…", "My hunch is…", "Looking back…", "Here we go…", "the list goes on…", "Anyway, on to…", "Overall, very happy with how things turned out", "hang in there".

He says "we" when walking the reader through steps ("First let's SSH into our server…") and "I" when reflecting.

## What to avoid

- Generic corporate or AI-flavoured prose: "In today's fast-paced world", "delve", "leverage", "unlock", "In conclusion", "In summary", stacked "First… Second… Finally…" paragraphs, repeating "As a software engineer" as a sentence opener. *The Art of Under Promising and Over Delivering* drifts this way in places and is the most formal of his posts; treat its structure as the outer limit, not the model. Its opening ("My name is Greg and I am a professional software engineer.") and the 😰 aside are the parts that sound like him.
- Claims of expertise he hasn't earned in the post. Show the work instead.
- Long, dense paragraphs and walls of theory.
- Inventing facts, numbers, names, dates or outcomes. If a draft needs a detail he hasn't given (a timing, a version, who helped), leave a clear placeholder like `[TODO: how long did the old query take?]` and ask.

## Clean copy, same voice

His published posts have typos and small grammar slips (its/it's, "we're" for "were", "now a days", "thoughs"). Don't copy those. Fix spelling and grammar, but keep his sentence rhythm, his casual phrasing and his asides. Don't smooth him into a polished columnist.

Spelling: American ("optimize", "behavior"), matching his posts.

## Drafting checklist

1. Ask for (or find) the real story: what happened, when, what he tried, what the numbers were, who was involved.
2. Open with the situation in one or two plain sentences.
3. Walk through it in short paragraphs, with headings named for what's in them.
4. Put concrete items in bullets; code, commands and output in fenced blocks.
5. Keep his honesty: hunches, limits, what he's still unsure of.
6. Credit sources with links; thank people by name where it fits.
7. End with a short takeaway, next step or quote.
8. Read it aloud: does it sound like Greg explaining it over coffee? Cut anything that sounds like a press release.

## Post file template

Posts are Markdown in `_posts/<slug>.md`; images go in `public/assets/blog/<slug>/`.

```md
---
title: 'Plain, literal title'
excerpt: 'One sentence, usually the opening line of the post.'
coverImage: '/assets/blog/<slug>/cover.jpg'
date: '2026-11-13T00:00:00.000Z'
author:
  name: Greg Hermo
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/<slug>/cover.jpg'
tags: ['laravel', 'mysql']
---
```

`coverImage` is optional. If the cover also appears in the body, the post page won't show it twice.
