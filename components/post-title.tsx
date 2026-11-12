export default function PostTitle({ children }) {
  return (
    <div className="px-4 py-24 sm:px-8">
      <h1 className="display w-full text-[clamp(2.5rem,8vw,6.5rem)]">{children}</h1>
    </div>
  )
}
