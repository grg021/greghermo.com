import { format, parseISO } from 'date-fns'
import { Post } from '../../lib/types'

/* Writing: the latest posts as open cards, each with its own cover photograph. */

type Props = { posts: Post[] }

export default function Writing({ posts }: Props) {
  return (
    <section className="section" id="writing" aria-labelledby="writing-h">
      <div className="wrap">
        <div className="section-head section-head--row">
          <div>
            <h2 id="writing-h">
              Posts on levelling up as a developer.
            </h2>
          </div>
          <a className="link" href="/posts">
            See all posts
          </a>
        </div>
        <div className="grid">
          {posts.slice(0, 2).map((post) => (
            <a className="card card--open span-6" href={`/posts/${post.slug}`} key={post.slug}>
              <div className="panel panel--top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="frame__img" src={post.coverImage} alt="" loading="lazy" data-source="client" data-subject="post cover" />
              </div>
              <p className="t-small muted">
                <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM yyyy')}</time>
              </p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
