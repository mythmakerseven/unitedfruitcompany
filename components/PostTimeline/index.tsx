import React from 'react'
import { ListedPost } from '../../lib/types'
import {
  Container,
  List,
  Bubble
} from './styles'

interface Props {
  posts: ListedPost[]
}

const PostTimeline: React.FC<Props> = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
    return 0
  })

  return (
    <Container>
      <List>
        {sortedPosts.map(post => <Bubble key={post.ID}>{post.slug}</Bubble>)}
      </List>
    </Container>
  )
}

export default PostTimeline