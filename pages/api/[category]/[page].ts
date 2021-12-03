import { NextApiRequest, NextApiResponse } from 'next'
import { getCategory } from '../../../lib/server'
import { categories } from '../../../lib/posts'
import { Post } from '../../../lib/types'

interface ErrorResponse {
  error: string
}

const isError = (value: ErrorResponse | Post[]): value is ErrorResponse => {
  if ((value as ErrorResponse).error) {
    return true
  } else {
    return false
  }
}

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

  const response = await getCategory(category.toString())

  if (isError(response)) {
    return res.status(500).json(response)
  } else {
    const postPage = (response as Post[]).slice(startingIndex, startingIndex + postsPerPage)
    res.setHeader('Cache-Control', 's-maxage=86400')
    return res.status(200).json(postPage)
  }
}

export default getPosts