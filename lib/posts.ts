import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { decode } from 'html-entities'
import { Post } from './types'

const postsURL = process.env.POSTS_URL

// Using this as a way to avoid having to make repeated requests to WP.
// All requests go through postRequest(), which caches the posts in /.cache
// the first time it's run. Subsequent calls will return the array with
// no need for another server request.
const cacheFolder = path.join(process.cwd(), '.cache')
const cacheFile = path.join(cacheFolder, 'posts')

const getCachedPosts = () => {
  try {
    const cachedPost = fs.readFileSync(cacheFile)
    return JSON.parse(cachedPost.toString()) as Post[]
  } catch {
    return null
  }
}

const getPaginatedResponse = async (url: string, page = 1): Promise<Post[]> => {
  console.log(`Getting page ${page}...`)

  const response = await axios({
    method: 'GET',
    url: `${url}?page=${page}`
  })

  let posts = response.data.posts as Post[]

  // Check if WP says there's another page
  if (response.data.meta.next_page) {
    const nextPage = await getPaginatedResponse(url, page + 1)
    posts = posts.concat(nextPage)
  }

  return posts
}

const getIndex = (current: number, max: number) => {
  if (current > max) {
    return 0
  } else if (current < 0) {
    return max
  }

  return current
}

// Cut down the huge WP objects into smaller ones that contain
// only the data we need.
const formatPosts = (posts: Post[]): Post[] => {
  return posts.map((post) => ({
    ID: post.ID,
    title: decode(post.title),
    content: post.content,
    date: post.date,
    excerpt: post.excerpt,
    slug: post.slug,
    categories: Object.keys(post.categories),
    featured_image: post.featured_image ? post.featured_image : undefined,
    tags: Object.keys(post.tags)
  }))
}

const postRequest = async () => {
  if (!postsURL) {
    return [] as Post[]
    // throw new Error('Missing proper credentials.')
  }

  const cachedPosts = getCachedPosts()

  if (cachedPosts) {
    return cachedPosts
  }

  console.log('Requesting posts from Wordpress API...')

  const posts = await getPaginatedResponse(postsURL)

  const formattedPosts = formatPosts(posts)

  // Create the cache directory if it doesn't exist.
  if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder)
  }

  fs.writeFileSync(cacheFile, JSON.stringify(formattedPosts))

  return formattedPosts
}

// Accepts an optional category argument that will only return matching posts.
// Otherwise, this function returns all posts.
export const fetchPosts = async (category: string | null = null) => {
  const posts = await postRequest()

  if (!category) {
    return posts
  }

  const matchingPosts = posts.filter(post => {
    if (post.categories.includes(category)) {
      return true
    } else {
      return false
    }
  })

  return matchingPosts
}

export const getSlugs = async (category: string | null = null) => {
  const posts = await fetchPosts(category)

  return posts.map((p: Post) => ({
      params: {
        slug: p.slug
      }
    })
  )
}

export const getTags = async (category: string | null = null) => {
  const tags: string[] = []
  const posts = await fetchPosts(category)

  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  return tags
}

export const getPostData = async (slug: string, category: string | null = null) => {
  const posts = await fetchPosts(category)
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