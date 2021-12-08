import Link from 'next/link'
import React from 'react'
import { ListedPost } from '../../lib/types'
import {
  Box
} from './ImageBox.styles'

interface Props {
  currentPost: ListedPost
}

const ImageBox: React.FC<Props> = ({ currentPost }) => {
  return (
    <Box
      backgroundURL={`${currentPost.featured_image}?w=800`}
    >
      <Link href={`/timeline/${currentPost.slug}`}>See more</Link>
    </Box>
  )
}

export default ImageBox