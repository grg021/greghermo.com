import Head from 'next/head'
import { HOME_OG_IMAGE_URL, SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from '../lib/constants'

export interface MetaProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  jsonLd?: object | object[]
}

export default function Meta({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  path = '/',
  image = HOME_OG_IMAGE_URL,
  type = 'website',
  publishedTime,
  jsonLd,
}: MetaProps) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@greghermo" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#f3f2ec" />
      <link rel="alternate" type="application/rss+xml" title={SITE_NAME} href="/feed.xml" />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      )}
    </Head>
  )
}
