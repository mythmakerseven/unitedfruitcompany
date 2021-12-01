import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  alt?: string,
}

const PrettyImage = styled.img<{ opacity: number }>`
  transition: 0.3s;
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: opacity(${props => props.opacity});
`

const Image: React.FC<Props> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) {
        setImageLoaded(true)
      } else {
        setImageLoaded(false)
      }
    }
  }, [src])

  return (
    <PrettyImage
      ref={imageRef}
      src={src}
      alt={alt ? alt : ''}
      opacity={imageLoaded ? 1 : 0}
      onLoad={() => setImageLoaded(true)}
    />
  )
}

export default Image