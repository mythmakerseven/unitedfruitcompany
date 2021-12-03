// Direct calls to the Wordpress API.
// These functions should only be called in the /api/ routes.

import { formatPosts, getPaginatedResponse } from './common'

const postsURL = `${process.env.POSTS_URL}/?number=100`

// Get all posts from a specific category
export const getCategory = async (category: string) => {
  const posts = await getPaginatedResponse(`${postsURL}&category=${category}`)
  return formatPosts(posts)
}

// Get posts from within a category that match a search query
export const searchCategory = async (category: string, query: string) => {
  const posts = await getPaginatedResponse(`${postsURL}&category=${category}&search=${encodeURIComponent(query)}`)
  return formatPosts(posts)
}

// Get posts from all categories that match a search query
export const searchAll = async (query: string) => {
  const posts = await getPaginatedResponse(`${postsURL}&search=${encodeURIComponent(query)}`)
  return formatPosts(posts)
}