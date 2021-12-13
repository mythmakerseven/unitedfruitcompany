// Helper functions used in multiple places.

import axios from 'axios'
import { decode } from 'html-entities'
import { ListedPost, Post, Tags } from './types'

export const getPage = async (url: string, page: number) => {
  console.log(`Getting single page ${page} from ${url}`)

  const response = await axios({
    method: 'GET',
    url: `${url}&page=${page}`
  })

  return response.data.posts as Post[]
}

export const getPaginatedResponse = async (url: string, page = 1): Promise<Post[]> => {
  console.log(`Getting ${`${url}&page=${page}`}`)

  const response = await axios({
    method: 'GET',
    url: `${url}&page=${page}`
  })

  let posts = response.data.posts as Post[]

  // Check if WP says there's another page
  if (response.data.meta.next_page) {
    const nextPage = await getPaginatedResponse(url, page + 1)
    posts = posts.concat(nextPage)
  }

  return posts
}

// Split tags that represent date ranges into their own array.
// This is a MacGyver solution for dating posts because we're using
// Wordpress.com which doesn't allow custom fields.
export const splitTags = (tags: string[]) => {
  const pattern = /^\d{4}-\d{4}$/

  const sortedTags: Tags = {
    dateTags: [],
    labelTags: []
  }

  tags.forEach(tag => {
    if (pattern.test(tag)) {
      sortedTags.dateTags.push(tag)
    } else {
      sortedTags.labelTags.push(tag)
    }
  })

  return sortedTags
}

// Cut down the huge WP objects into smaller ones that contain
// only the data we need.
export const formatPosts = (posts: Post[]): Post[] => {
  return posts.map((post) => ({
    ID: post.ID,
    title: decode(post.title),
    content: post.content,
    date: post.date,
    excerpt: post.excerpt,
    slug: post.slug,
    categories: Object.keys(post.categories).map(c => c.toLowerCase()),
    featured_image: post.featured_image ? post.featured_image : null,
    tags: splitTags(Object.keys(post.tags))
  }))
}

export const formatListedPosts = (posts: Post[]): ListedPost[] => {
  return posts.map((post) => ({
    ID: post.ID,
    title: decode(post.title),
    date: post.date,
    excerpt: post.excerpt,
    slug: post.slug,
    featured_image: post.featured_image ? post.featured_image : null,
    tags: splitTags(Object.keys(post.tags))
  }))
}

// Get the first URL param.
// Example:
// google.com/search/example => search
export const getUpperPath = (url: string) => {
  const lastSlash = url.lastIndexOf('/')
  return url.slice(0, lastSlash)
}