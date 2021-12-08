import React from 'react'
import TimelineHeader from './TimelineHeader'
import Link from 'next/link'
import {
  Item,
  RightSide,
  LeftSide,
  Content
} from './GridItem.styles'
import { ListedPost } from '../../lib/types'

interface Props {
  backgroundColor: string,
  post: ListedPost
}

const GridItem: React.FC<Props> = ({ backgroundColor, post, children }) => {
  const spans = React.Children.toArray(children)

  return (
    <Item>
      <LeftSide>
        <Content>
          <TimelineHeader>
            {spans}
          </TimelineHeader>
        </Content>
      </LeftSide>
      <RightSide backgroundColor={backgroundColor}>
        <Link href={`/timeline/${post.slug}`}>See more</Link>
      </RightSide>
    </Item>
  )
}

export default GridItem