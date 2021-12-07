import React from 'react'
import {
  Container,
  Button
} from './styles'

interface Props {
  pageCount: number,
  setPage: (arg: number) => void
}

const PagePicker: React.FC<Props> = ({ pageCount, setPage }) => {
  const displayPageButtons = () => {
    const buttons = []
    for (let x = 1; x <= pageCount; x++) {
      buttons.push(
        <Button
          onClick={() => setPage(x)}
          key={x}
        >
          {x}
        </Button>
      )
    }
    return buttons
  }

  return (
    <Container>
      { displayPageButtons() }
    </Container>
  )
}

export default PagePicker