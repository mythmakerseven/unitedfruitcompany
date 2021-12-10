import React, { useState } from 'react'
import {
  Collapsed,
  Expanded,
  ToggleButton
} from './ExpandableContent.styles'
import {
  ArrowUp,
  ArrowDown
} from 'react-bootstrap-icons'

const ExpandableContent: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState(false)

  const content = React.Children.toArray(children)

  const displayContent = () => {
    if (expanded) {
      return <Expanded>{content}</Expanded>
    } else {
      return <Collapsed tabIndex={-1}>{content}</Collapsed>
    }
  }

  return (
    <>
      {displayContent()}
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        { expanded ? <ArrowUp /> : <ArrowDown /> }
      </ToggleButton>
    </>
  )
}

export default ExpandableContent
