import React, { useEffect, useRef, useState } from 'react'
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

const InfoBox: React.FC<Props> = ({ post, scrollHeight, index, children }) => {
  const [isActive, setIsActive] = useState(false)

  const content = React.Children.toArray(children)

  const itemRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (itemRef.current) {
      const windowHeight = window.innerHeight
      const scrollTop = itemRef.current.clientHeight * index
      if (Math.abs(windowHeight - scrollTop) < (windowHeight / 2)) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  }, [index, scrollHeight])

  useEffect(() => {
    if (isActive) {
      console.log(`${post.title} is now active.`)
    }
  }, [isActive, post.title])

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