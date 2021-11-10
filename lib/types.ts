export interface LooseObject {
    [key: string]: any
}

export interface Post {
    title: string,
    coverImage: string,
    date: string,
    excerpt: string,
    slug: string,
    content?: string,
    ogImage?: string,
    author?: string,
}
