import { NextApiRequest, NextApiResponse } from 'next'
import { categories } from '../../../../lib/posts'
import { searchCategory, searchCategoryByTag } from '../../../../lib/server'

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, query } = req.query
  
  if (!categories.includes(category.toString().toLowerCase())) {
    return res.status(404).send(`${category} is not a valid post category.`)
  }

  // For some reason, WP search doesn't include tags. This isn't a huge deal
  // for text posts, but image materials rely on tags for information.
  // So we check if it's an image post type, and search by tag if it is.
  let posts
  if (category.toString().toLowerCase() === 'documents') {
    posts = await searchCategoryByTag(category.toString(), query.toString())
  } else {
    posts = await searchCategory(category.toString(), query.toString())
  }

  return res.status(200).json(posts)
}

export default searchPosts