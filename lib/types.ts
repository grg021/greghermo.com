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
    ogImage?: OgImage,
    author?: Author,
}

interface OgImage {
    url: string;
}

interface Author {
    name: string;
    picture: string;
}
