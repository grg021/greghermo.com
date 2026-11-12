import { blogSchema } from '../../lib/schema'
import { SITE_NAME } from '../../lib/constants'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import Layout from '../../components/layout'
import PageBand from '../../components/page-band'
import { getAllPosts } from '../../lib/api'
import { Post } from '../../lib/types'

interface Props {
  allPosts: Post[]
}

export default function Posts({ allPosts }: Props) {
  return (
    <Layout meta={{
        title: `Writing | ${SITE_NAME}`,
        description: 'Articles by Greg Hermo on software engineering, career growth as a developer, and terminal tooling.',
        path: '/posts',
        jsonLd: blogSchema,
      }}>

      <PageBand title="Writing">
        <p className="text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug">
          Notes on building, learning and growing as a software developer.
        </p>
      </PageBand>

      <div className="wrap">
        <div className="w-full bg-sheet rounded-[20px] px-5 pb-16 pt-4 text-ink sm:px-10 md:pb-24 lg:px-16">
          {allPosts.length === 0 ? (
            <p className="py-16 text-lg text-muted">Nothing posted yet. The first one is on its way.</p>
          ) : (
            <ol>
              {allPosts.map((post) => (
                <li key={post.slug} className="border-b border-rule">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group [display:grid] gap-x-10 gap-y-2 py-10 md:grid-cols-[8rem_minmax(0,1fr)] md:py-12"
                  >
                    <time dateTime={post.date} className="meta tabular pt-1.5 text-accent">
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </time>
                    <div>
                      <h2 className="font-display text-2xl font-medium leading-tight decoration-accent decoration-[3px] underline-offset-[6px] group-hover:underline md:text-[2rem]">
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-measure text-lg leading-relaxed text-muted">{post.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </Layout>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  return {
    props: { allPosts },
  }
}
