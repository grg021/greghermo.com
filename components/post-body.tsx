export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
