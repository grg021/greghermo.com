# greghermo.com

Personal site and blog, built with Next.js (Pages Router).

Blog posts live in `/_posts` as Markdown files with front matter. Adding a new Markdown file there creates a new post. Front matter is parsed with [`gray-matter`](https://github.com/jonschlinkert/gray-matter), and the body is rendered to HTML with [`markdown-it`](https://github.com/markdown-it/markdown-it).

## Development

Requires Node.js 20.9+.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

### Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4 (+ `@tailwindcss/typography`)
- TypeScript
