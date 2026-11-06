import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default function PostBody({ content }: { content: string }) {
  const htmlContent = md.render(content)
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
