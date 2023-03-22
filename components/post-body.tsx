import MarkdownIt from 'markdown-it';

export default function PostBody({ content }) {
  const md: MarkdownIt = new MarkdownIt();
  const htmlContent = md.render(content);
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}
