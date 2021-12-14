import React, { useState } from 'react'
import {
  Collapsed,
  Expanded,
  ToggleButton,
  Flex
} from './ExpandableContent.styles'
import {
  ArrowDown
} from 'react-bootstrap-icons'

interface Props {
  flex: boolean
}

const ExpandableContent: React.FC<Props> = ({ flex, children }) => {
  const [expanded, setExpanded] = useState(false)

  const content = React.Children.toArray(children)

  const displayContent = () => {
    if (expanded) {
      return <Expanded>{handleFlex(content)}</Expanded>
    } else {
      return <Collapsed tabIndex={-1}>{handleFlex(content)}</Collapsed>
    }
  }

  const handleFlex = (children: (React.ReactChild | React.ReactFragment | React.ReactPortal)[]) => {
    if (flex) {
      return <Flex>{children}</Flex>
    } else {
      return children
    }
  }

  return (
    <>
      {displayContent()}
      { expanded ? '' : 
        <ToggleButton onClick={() => setExpanded(true)}>
          <ArrowDown />
        </ToggleButton>
      }
    </>
  )
}

export default ExpandableContent
