import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { Post } from './types'

const postsURL = process.env.POSTS_URL
const token = process.env.TOKEN

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

const postRequest = async () => {
  if (!postsURL || !token) {
    throw new Error('Missing proper credentials.')
  }

  const cachedPosts = getCachedPosts()

  if (cachedPosts) {
    return cachedPosts
  }

  console.log('Requesting posts from Wordpress API...')

  const response = await axios({
    method: 'GET',
    url: postsURL,
    headers: {
      Authorization: `BEARER ${token}`
    }
  })

  const posts = JSON.stringify(response.data.posts as Post[])

  // Create the cache directory if it doesn't exist.
  if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder)
  }

  fs.writeFileSync(cacheFile, posts)

  return response.data.posts as Post[]
}

// Accepts an optional category argument that will only return matching posts.
// Otherwise, this function returns all posts.
export const fetchPosts = async (category: string | null = null) => {
  const posts = await postRequest()

  if (!category) {
    return posts
  }

  const matchingPosts = posts.filter(post => {
    const categories = Object.keys(post.categories)
    if (categories.includes(category)) {
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

export const getPostData = async (slug: string, category: string | null = null) => {
  const posts = await fetchPosts(category)
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    throw new Error('Oops, post doesn\'t exist.')
  }

  return post
}