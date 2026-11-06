import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { blogPostingSchema } from '../../lib/schema'
import { SITE_NAME } from '../../lib/constants'
import {Post as PostObj} from '../../lib/types'

interface Props {
  post: PostObj
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout meta={post?.slug ? {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      path: `/posts/${post.slug}`,
      image: post.ogImage?.url || post.coverImage,
      type: 'article',
      publishedTime: post.date,
      jsonLd: blogPostingSchema(post),
    } : undefined}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

interface Params {
  params: PostObj
}

export function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'excerpt',
    'ogImage',
    'coverImage',
  ]) as PostObj
  const content = post.content || '';

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
