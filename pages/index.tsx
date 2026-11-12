import { personSchema, blogSchema } from '../lib/schema'
import Layout from '../components/layout'
import Hero from '../components/home/Hero'
import Work from '../components/home/Work'
import Journey from '../components/home/Journey'
import Writing from '../components/home/Writing'
import { getAllPosts } from '../lib/api'
import { Post } from '../lib/types'

interface Props {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout
      meta={{
        title: 'Greg Hermo: software engineer in Laguna, Philippines',
        description:
          'Greg Hermo builds Laravel and React apps at ContactOut, health information systems with Ateneo, and runs Bo’s Coffee Calamba with his wife.',
        path: '/',
        type: 'profile',
        jsonLd: [personSchema, blogSchema],
      }}
    >
      <Hero />
      <Work />
      <Journey />
      <Writing posts={allPosts} />
    </Layout>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'coverImage'], 2)

  return {
    props: { allPosts },
  }
}
