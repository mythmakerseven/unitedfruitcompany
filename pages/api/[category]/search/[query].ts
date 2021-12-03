import { NextApiRequest, NextApiResponse } from 'next'
import { categories } from '../../../../lib/posts'
import { searchCategory } from '../../../../lib/server'

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, query } = req.query
  
  if (!categories.includes(category.toString().toLowerCase())) {
    return res.status(404).send(`${category} is not a valid post category.`)
  }

  const posts = await searchCategory(category.toString(), query.toString())
  return res.status(200).json(posts)
}

export default searchPosts