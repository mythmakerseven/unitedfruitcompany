import React from 'react'
import TimelineHeader from './TimelineHeader'
import {
  Item,
  RightSide,
  LeftSide
} from './GridItem.styles'

interface Props {
  backgroundColor: string
}

const GridItem: React.FC<Props> = ({ backgroundColor, children }) => {
  const spans = React.Children.toArray(children)

  return (
    <Item>
      <LeftSide>
        <TimelineHeader>
          {spans}
        </TimelineHeader>
      </LeftSide>
      <RightSide backgroundColor={backgroundColor}>
        <p>work in progress</p>
      </RightSide>
    </Item>
  )
}

export default GridItem