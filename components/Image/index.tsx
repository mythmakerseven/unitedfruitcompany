import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  alt?: string,
  width?: string,
  height?: string
}

const PrettyImage = styled.img<{ opacity: number }>`
  transition: 0.3s;
  height: {${props => props.height ? props.height : '100%' }};
  width: {${props => props.width ? props.width : '100%' }};
  object-fit: contain;
  filter: opacity(${props => props.opacity});
`

const Image: React.FC<Props> = ({ src, alt, width, height }) => {
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
      height={height}
      width={width}
      alt={alt ? alt : ''}
      opacity={imageLoaded ? 1 : 0}
      onLoad={() => setImageLoaded(true)}
    />
  )
}

export default Image