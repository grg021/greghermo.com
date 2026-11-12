export const GITHUB_REPO = 'grg021/greghermo.com'
export const SITE_URL = 'https://greghermo.com'
export const SITE_NAME = 'Reflections by Greg Hermo'
export const AUTHOR_NAME = 'Greg Hermo'
export const SITE_DESCRIPTION =
    'Greg Hermo is a Senior Software Engineer at ContactOut writing about software engineering, career growth, and developer tooling.'
export const LINKS = {
    email: 'greg.hermo@gmail.com',
    github: 'https://github.com/grg021',
    linkedin: 'https://www.linkedin.com/in/greghermo/',
    twitter: 'https://twitter.com/greghermo',
}
export const HOME_OG_IMAGE_URL = `${SITE_URL}/assets/img/greghermo-portrait-1300.jpg`
export const SOCIAL_LINKS = [
    'https://twitter.com/greghermo',
    'https://github.com/grg021',
    'https://www.linkedin.com/in/greghermo/',
]

export function absoluteUrl(path: string) {
    if (/^https?:\/\//.test(path)) return path
    return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
