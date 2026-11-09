import { personSchema, blogSchema } from '../lib/schema'
import { AUTHOR_NAME } from '../lib/constants'
import Layout from '../components/layout'
import CourtHero from '../components/home/CourtHero'
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
    <Layout meta={{ title: AUTHOR_NAME, path: '/', type: 'profile', jsonLd: [personSchema, blogSchema] }}>
      <CourtHero />
      <Work />
      <Journey />
      <Writing posts={allPosts} />
    </Layout>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'], 5)

  return {
    props: { allPosts },
  }
}
