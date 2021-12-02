// This stuff will only run when there's no cache.
// When it's done, it places a cache file into ../.cache/posts
// Future requests in ./posts.ts will just read that file.
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { decode } from 'html-entities'
import { Post } from './types'

const postsURL = process.env.POSTS_URL

const cacheFolder = path.join(process.cwd(), '.cache')
const cacheFile = path.join(cacheFolder, 'posts')

const getPosts = async () => {
  const cachedPosts = getCachedPosts()

  if (cachedPosts) {
    return cachedPosts
  }

  const posts = await requestFromServer()
  return posts
}

const requestFromServer = async () => {
  if (!postsURL) {
    throw new Error('Missing post URL environment variable.')
  }

  console.log('Requesting posts from Wordpress API...')

  const posts = await getPaginatedResponse(postsURL)

  const formattedPosts = formatPosts(posts)

  // Create the cache directory if it doesn't exist.
  if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder)
  }

  // Sort posts alphabetically
  const sortedPosts = formattedPosts.sort((a, b) => {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  })

  fs.writeFileSync(cacheFile, JSON.stringify(sortedPosts))

  return sortedPosts
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
    categories: Object.keys(post.categories).map(c => c.toLowerCase()),
    featured_image: post.featured_image ? post.featured_image : undefined,
    tags: Object.keys(post.tags)
  }))
}

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



export default getPosts