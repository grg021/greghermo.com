export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left dark:text-gray-400">
      {children}
    </h1>
  )
}
