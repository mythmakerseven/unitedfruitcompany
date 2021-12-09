import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ListedPost } from '../../lib/types'
import {
  Box
} from './ImageBox.styles'

interface Props {
  currentPost: ListedPost
}

const ImageBox: React.FC<Props> = ({ currentPost }) => {
  const [opacity, setOpacity] = useState(0)
  const [imageURL, setImageURL] = useState(currentPost.featured_image)

  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (boxRef.current) {
      setOpacity(0)
      setTimeout(() => {
        setImageURL(currentPost.featured_image)
        setOpacity(1)
      }, 400)
    }
  }, [currentPost, imageURL])

  return (
    <Box
      backgroundurl={`${imageURL}?w=800`}
      opacity={opacity}
      ref={boxRef}
    >
      <Link href={`/timeline/${currentPost.slug}`}>See more</Link>
    </Box>
  )
}

export default ImageBox