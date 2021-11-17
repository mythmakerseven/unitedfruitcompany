import React, { ReactElement } from 'react'

interface Props {
  child: ReactElement<any, any>
}

const Secret: React.FC<Props> = ({ child }) => {
  const secret = typeof Audio !== 'undefined' ? new Audio('../audio/secret.ogx') : undefined

  return (
    <div onClick={async () => await secret?.play()}>
      { child }
    </div>
  )
}

export default Secret