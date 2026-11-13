// Generates public/sitemap.xml and public/feed.xml from _posts at build time.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const SITE_URL = 'https://greghermo.com'
const SITE_NAME = 'Reflections by Greg Hermo'
const SITE_DESCRIPTION =
  'Greg Hermo is a Senior Software Engineer at ContactOut writing about software engineering, career growth, and developer tooling.'

const root = process.cwd()
const postsDir = path.join(root, '_posts')
const publicDir = path.join(root, 'public')

const escape = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const posts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, f), 'utf8'))
    return { slug: f.replace(/\.md$/, ''), ...data }
  })
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date > b.date ? -1 : 1))

const latest = posts[0]?.date ?? new Date().toISOString()
const staticPages = [
  { loc: '/', lastmod: latest },
  { loc: '/about' },
  { loc: '/ehealth' },
  { loc: '/posts', lastmod: latest },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
  ...staticPages,
  ...posts.map((p) => ({ loc: `/posts/${p.slug}`, lastmod: p.date })),
]
  .map(
    ({ loc, lastmod }) =>
      `  <url>\n    <loc>${SITE_URL}${loc}</loc>${lastmod ? `\n    <lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}\n  </url>`
  )
  .join('\n')}
</urlset>
`

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escape(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE_URL}/posts/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/posts/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escape(p.excerpt)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'feed.xml'), feed)
console.log(`Generated sitemap.xml and feed.xml (${posts.length} posts)`)
