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

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#3E7350" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#3E7350" />
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
