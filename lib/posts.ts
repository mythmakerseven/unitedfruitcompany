import axios from 'axios'
import { Post } from './types'

const postsURL = process.env.POSTS_URL
const token = process.env.TOKEN

// Using this as a way to avoid having to make repeated requests to WP.
// All requests go through postRequest(), which sets the posts variable
// the first time it's run. Subsequent calls will return the array with
// no need for another server request.
let postsResponse: Post[]

const postRequest = async () => {
  if (!postsURL || !token) {
    throw new Error('Missing proper credentials.')
  }

  if (postsResponse) {
    return postsResponse
  }

  const response = await axios({
    method: 'GET',
    url: postsURL,
    headers: {
      Authorization: `BEARER ${token}`
    }
  })

  postsResponse = response.data.posts
  return postsResponse
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