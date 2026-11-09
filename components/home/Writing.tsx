import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from '../../lib/types'

type Props = { posts: Post[] }

export default function Writing({ posts }: Props) {
  return (
    <section id="writing" aria-labelledby="writing-title" className="scroll-mt-6 px-4 pt-24 sm:px-8 md:pt-32">
      <div className="mx-auto max-w-court bg-line px-5 py-14 text-ink sm:px-10 md:py-20 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="writing-title" className="lettering text-[clamp(3rem,8vw,6.5rem)]">
            Writing
          </h2>
          <Link href="/posts" className="label text-court underline decoration-2 underline-offset-4 hover:text-ink">
            All posts
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12 text-lg text-ink-soft">Nothing posted yet. The first one is on its way.</p>
        ) : (
          <ol className="mt-12 border-t-4 border-ink md:mt-16">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-ink/15">
                <Link
                  href={`/posts/${post.slug}`}
                  className="group grid gap-x-10 gap-y-2 py-8 md:grid-cols-[8rem_minmax(0,1fr)] md:py-10"
                >
                  <time dateTime={post.date} className="label tabular pt-1.5 text-court">
                    {format(parseISO(post.date), 'MMM yyyy')}
                  </time>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight decoration-court decoration-[3px] underline-offset-[6px] group-hover:underline md:text-[1.75rem]">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-measure text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
