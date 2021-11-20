import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  child: ReactNode
}

const Secret: React.FC<Props> = ({ child }) => {
  const secret = typeof Audio !== 'undefined' ? new Audio('../audio/secret.ogx') : undefined

  return (
    <Container onClick={async () => await secret?.play()}>
      { child }
    </Container>
  )
}

export default Secret