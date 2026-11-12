import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default function PostBody({ content }: { content: string }) {
  const htmlContent = md.render(content)
  return (
    <div className="wrap">
      <div className="w-full bg-sheet rounded-b-[20px] px-5 pb-20 pt-12 text-ink sm:px-10 md:pb-28 md:pt-16 lg:px-16">
        <div
          className="prose prose-lg mx-auto max-w-measure text-muted prose-headings:font-display prose-headings:font-medium prose-headings:text-ink prose-a:text-accent prose-a:decoration-2 prose-strong:text-ink prose-code:font-normal prose-code:text-ink prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-[12px] prose-pre:bg-night prose-pre:text-night-ink prose-li:marker:text-accent"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  )
}
