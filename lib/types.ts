export interface Post {
    title?: string,
    date?: Date,
    slug?: string,
    author?: string,
    content?: string,
    ogImage?: string,
    coverImage?: string
}


export interface LooseObject {
    [key: string]: any
}
