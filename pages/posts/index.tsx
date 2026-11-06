import { getAllPosts } from '../../lib/api'
import Container from '../../components/container'
import Link from 'next/link'
import distanceToNow from '../../lib/utils'
import Layout from '../../components/layout'
import { blogSchema } from '../../lib/schema'
import { SITE_NAME } from '../../lib/constants'
import { H1 } from '../../lib/styled'
import {Post} from "../../lib/types";

interface Props {
    allPosts: Post[];
}

export default function Posts({ allPosts }: Props) {
    return (
      <Layout meta={{
        title: `Posts | ${SITE_NAME}`,
        description: 'Articles by Greg Hermo on software engineering, career growth as a developer, and terminal tooling.',
        path: '/posts',
        jsonLd: blogSchema,
      }}>
      <Container>
        <H1>Posts</H1>
        {allPosts.length ? (
          allPosts.map((post) => (
            <article key={post.slug} className="mb-10">
              <h2 className="text-lg leading-6 font-bold dark:text-white">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]" className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className='dark:text-gray-400 my-2'>{post.excerpt}</p>
              <div className="text-gray-600 dark:text-gray-400">
                <time dateTime={post.date}>{distanceToNow(new Date(post.date))}</time>
              </div>
            </article>
          ))
        ) : (
          <p>No blog posted yet :/</p>
        )}
      </Container>
      </Layout>
    );
}

export function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
