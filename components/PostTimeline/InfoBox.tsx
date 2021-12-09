import React, { useRef } from 'react'
import TimelineHeader from './TimelineHeader'
import {
  Item,
  Content
} from './InfoBox.styles'
import { ListedPost } from '../../lib/types'

interface Props {
  post: ListedPost,
  scrollHeight: number,
  index: number
}

const InfoBox: React.FC<Props> = ({ children }) => {
  const content = React.Children.toArray(children)

  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <Item
      ref={itemRef}
    >
      <Content>
        <TimelineHeader>
          {content}
        </TimelineHeader>
      </Content>
    </Item>
  )
}

export default InfoBox