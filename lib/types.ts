import { ParsedUrlQuery } from 'querystring'

// This is the relevant parts of the response from the WordPress API.
export interface Post {
  ID: number,
  title: string,
  content: string,
  date: string,
  excerpt: string,
  slug: string,
  categories: string[],
  featured_image: string | null,
  tags: string[]
}

// For list pages, e.g. /bios, where we don't need certain properties.
export type ListedPost = Omit<Post, 'content' | 'categories'>

export interface DisplayedPost extends Post {
  // The below properties don't come from the API, we add them to
  // support the previous/next buttons on post pages.
  previousSlug: string,
  nextSlug: string
}

// Properly type the props for post pages.
export interface PostParams extends ParsedUrlQuery {
  slug: string
}
