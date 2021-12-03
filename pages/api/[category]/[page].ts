import { NextApiRequest, NextApiResponse } from 'next'
import { getServerCategory } from '../../../lib/cache'

const categories = [
  'articles',
  'biographies',
  'documents',
  'pictures',
  'resources',
  'timeline'
]

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, page } = req.query
  const postsPerPage = 30

  if (!categories.includes(category.toString().toLowerCase())) {
    return res.status(404).send(`${category} is not a valid post category.`)
  }

  if (isNaN(parseInt(page.toString()))) {
    return res.status(400).send(`${page} is not a valid page number.`)
  }

  // Get the index to start fetching posts at
  let startingIndex
  try {
    startingIndex = (parseInt(page.toString()) - 1) * postsPerPage
  } catch(e) {
    return res.status(500).send('Oops. Something broke on our end.')
  }

  try {
    const posts = await getServerCategory(category.toString())
    const postPage = posts.slice(startingIndex, startingIndex + postsPerPage)
    res.setHeader('Cache-Control', 's-maxage=86400')
    return res.status(200).json(postPage)
  } catch(e) {
    return res.status(500).send('Oops. Something broke on our end.')
  }
}

export default getPosts