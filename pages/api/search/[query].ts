import { NextApiRequest, NextApiResponse } from 'next'
import { searchAll } from '../../../lib/server'

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query

  const posts = await searchAll(query.toString())
  return res.status(200).json(posts)
}

export default searchPosts