import { AUTHOR_NAME, HOME_OG_IMAGE_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS, absoluteUrl } from './constants'
import { Post } from './types'

export const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: SITE_URL,
    image: HOME_OG_IMAGE_URL,
    jobTitle: 'Senior Software Engineer',
    worksFor: { '@type': 'Organization', name: 'ContactOut' },
    alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of the Philippines Los Baños' },
        { '@type': 'CollegeOrUniversity', name: 'University of the Philippines Diliman' },
    ],
    sameAs: SOCIAL_LINKS,
}

export const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/posts#blog`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/posts`,
    author: { '@id': `${SITE_URL}/#person` },
}

export function blogPostingSchema(post: Post) {
    const url = `${SITE_URL}/posts/${post.slug}`
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        url,
        mainEntityOfPage: url,
        image: absoluteUrl(post.ogImage?.url || post.coverImage || HOME_OG_IMAGE_URL),
        author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: AUTHOR_NAME, url: SITE_URL },
        isPartOf: { '@id': `${SITE_URL}/posts#blog` },
    }
}
