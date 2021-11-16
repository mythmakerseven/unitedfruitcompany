import { ParsedUrlQuery } from 'querystring'

// This is the relevant parts of the response from the WordPress API.
export interface Post {
  ID: number,
  title: string,
  content: string,
  date: string,
  slug: string,
  categories: string[],
  excerpt: string
}

// Properly type the props for post pages.
export interface PostParams extends ParsedUrlQuery {
  slug: string
}