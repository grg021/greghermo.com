import { getAllPosts } from '../../lib/api'
import Container from '../../components/container'
import Link from 'next/link'
import distanceToNow from '../../lib/utils'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function Posts({ allPosts }) {
    return (
        <Layout>
        <Head>
          <title>Reflections by Greg Hermo</title>
        </Head>
        <Container>
          {allPosts.length ? (
            allPosts.map((post) => (
              <article key={post.slug} className="mb-10">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a className="text-lg leading-6 font-bold">{post.title}</a>
                </Link>
                <p>{post.excerpt}</p>
                <div className="text-gray-400">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </div>
              </article>
            ))
          ) : (
            <p>No blog posted yet :/</p>
          )}
        </Container>
        </Layout>
      )
}

export async function getStaticProps() {
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
