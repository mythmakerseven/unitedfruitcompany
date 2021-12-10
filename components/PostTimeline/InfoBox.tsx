import React, { useRef } from 'react'
import TimelineHeader from './TimelineHeader'
import {
  Item,
  Content
} from './InfoBox.styles'
import { ListedPost } from '../../lib/types'

interface Props {
  post: ListedPost,
  activePost: ListedPost
}

const InfoBox: React.FC<Props> = ({ post, activePost }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <Item
      ref={itemRef}
    >
      <Content>
        <TimelineHeader
          post={post}
          activePost={activePost}
        >
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </TimelineHeader>
      </Content>
    </Item>
  )
}

export default InfoBox