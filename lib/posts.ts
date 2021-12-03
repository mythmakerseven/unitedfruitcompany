import getPosts from './cache'
import { ListedPost, Post } from './types'

// Helper for fetching the previous or next item in an array
// when we want to wrap around to the start/beginning instead
// of overflowing.
const getIndex = (current: number, max: number) => {
  if (current > max) {
    return 0
  } else if (current < 0) {
    return max
  }

  return current
}

export const getCategory = async (category: string) => {
  const posts = await getPosts()

  return posts.filter(post => post.categories.includes(category.toLowerCase()))
}

export const getSlugs = async (category: string) => {
  const posts = await getCategory(category)

  return posts.map((p: Post) => ({
      params: {
        slug: p.slug
      }
    })
  )
}

// This function returns an array of string, sorted by frequency of appearance
// in posts. It also truncates the response to 20 for performance.
export const getTags = async (category: string) => {
  const tags: { [name: string]: number } = {}
  const posts = await getCategory(category)

  posts.forEach(post => {
    post.tags.forEach(tag => {
      tags[tag] = tags[tag] ? tags[tag] + 1 : 1
    })
  })

  const tagArray: string[] = Object.keys(tags)

  tagArray.sort((a, b) => {
    if (tags[b] === tags[a]) {
      return a > b ? 1 : -1
    } else {
      return tags[b] > tags[a] ? 1 : -1
    }
  })

  return tagArray.slice(0, 20)
}

export const getPostsForDisplay = async (category: string) => {
  const posts = await getCategory(category)

  return posts.map(post => {
    const trimmedData: ListedPost = {
      ID: post.ID,
      title: post.title,
      date: post.date,
      slug: post.slug,
      tags: post.tags,
      featured_image: post.featured_image ? post.featured_image : null
    }

    return trimmedData
  })
}

export const getPostData = async (slug: string, category: string) => {
  const posts = await getCategory(category)
  const postIndex = posts.findIndex(p => p.slug === slug)

  const maxIndex = posts.length - 1

  const post = posts[postIndex]
  const previousSlug = posts[getIndex(postIndex - 1, maxIndex)].slug
  const nextSlug = posts[getIndex(postIndex + 1, maxIndex)].slug

  if (postIndex === -1) {
    throw new Error('Oops, post doesn\'t exist.')
  }

  return {
    ...post,
    previousSlug,
    nextSlug
  }
}