import { NextApiRequest, NextApiResponse } from 'next'
import { getCategoryPage } from '../../../lib/server'
import { categories } from '../../../lib/posts'
import { Post } from '../../../lib/types'
import { formatListedPosts } from '../../../lib/common'

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, page } = req.query

  if (!categories.includes(category.toString().toLowerCase())) {
    return res.status(404).send(`${category} is not a valid post category.`)
  }

  if (isNaN(parseInt(page.toString()))) {
    return res.status(400).send(`${page} is not a valid page number.`)
  }

  const response = await getCategoryPage(category.toString(), parseInt(page.toString()))

  const filteredPosts = formatListedPosts(response as Post[])
  
  res.setHeader('Cache-Control', 's-maxage=86400')
  return res.status(200).json(filteredPosts)
}

export default getPosts