import React from 'react'
import {
  Header
} from './TimelineHeader.styles'
import { useTrail, config } from '@react-spring/web'

const TimelineHeader: React.FC = ({ children }) => {
  const lines = React.Children.toArray(children)

  const trail = useTrail(lines.length, {
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses
  })

  return (
    <>
      {trail.map((props, index) => (
        <Header style={props} key={index}>{lines[index]}</Header>
      ))}
    </>
  )
}

export default TimelineHeader