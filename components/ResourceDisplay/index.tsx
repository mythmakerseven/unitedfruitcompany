import { useState } from 'react'
import { Post } from '../../lib/types'
import CloserLook from './CloserLook'
import Image from '../Image'
import {
  Content,
  Title,
  Description
} from './styles'

interface Props {
  post: Post
}

const ResourceDisplay: React.FC<Props> = ({ post }) => {
  const [showCloserLook, setCloserLook] = useState(false)

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

  return (
    <>
      { handleCloserLook() }
      <Content onClick={() => setCloserLook(true)}>
        <Image
          src={`${post.featured_image}?w=600`}
          alt={post.title}
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