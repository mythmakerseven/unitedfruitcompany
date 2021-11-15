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
const cacheFile = path.join(process.cwd(), '.cache', 'posts')

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

  fs.writeFileSync(cacheFile, posts)

  return response.data.posts as Post[]
}

export const fetchPosts = async () => {
  return await postRequest()
}

export const getSlugs = async () => {
  const posts = await postRequest()

  return posts.map((p: Post) => ({
      params: {
        slug: p.slug
      }
    })
  )
}

export const getPostData = async (slug: string) => {
  const posts = await postRequest()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    throw new Error('Oops, post doesn\'t exist.')
  }

  return post
}