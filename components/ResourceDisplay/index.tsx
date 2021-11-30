/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import { Post } from '../../lib/types'
import CloserLook from './CloserLook'
import {
  Content,
  Title,
  Description,
  Image
} from './styles'

interface Props {
  post: Post
}

const ResourceDisplay: React.FC<Props> = ({ post }) => {
  const [showCloserLook, setCloserLook] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const imageRef = useRef<HTMLImageElement>(null)

  if (!post.featured_image) {
    throw new Error('Every picture post must have a featured image.')
  }

  const handleCloserLook = () => {
    if (showCloserLook && post.featured_image) {
      return (
        <CloserLook
          image={post.featured_image}
          alt={post.title}
          showCloserLook={showCloserLook}
          setCloserLook={setCloserLook}
        />
      )
    }
  }

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) {
        setImageLoaded(true)
      } else {
        setImageLoaded(false)
      }
    }
  }, [post])

  return (
    <>
      { handleCloserLook() }
      <Content>
        <Image
          onLoad={() => setImageLoaded(true)}
          ref={imageRef}
          src={`${post.featured_image}?w=600`}
          alt={post.title}
          opacity={imageLoaded ? 1 : 0}
          onClick={() => setCloserLook(true)}
        />
      </Content>
      <Title>
        {post.title}
      </Title>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Description>
    </>
  )
}

export default ResourceDisplay