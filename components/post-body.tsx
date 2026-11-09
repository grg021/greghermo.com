import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default function PostBody({ content }: { content: string }) {
  const htmlContent = md.render(content)
  return (
    <div className="px-4 sm:px-8">
      <div className="mx-auto max-w-court bg-line px-5 pb-20 pt-12 text-ink sm:px-10 md:pb-28 md:pt-16 lg:px-16">
        <div
          className="prose prose-lg mx-auto max-w-measure font-serif text-ink-soft prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-a:text-court prose-a:decoration-2 prose-strong:text-ink prose-code:font-normal prose-code:text-ink prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none prose-pre:bg-board prose-pre:text-board-mist prose-li:marker:text-court"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  )
}
