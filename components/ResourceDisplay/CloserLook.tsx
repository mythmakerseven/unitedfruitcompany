/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react'
import {
  FullScreenContainer,
  FullScreenContent,
  CloseButton,
  Image
} from './styles'
import { XLg } from 'react-bootstrap-icons'
import { useEffect } from 'react'

interface Props {
  image: string,
  alt: string,
  showCloserLook: boolean,
  setCloserLook: (arg: boolean) => void
}

const CloserLook: React.FC<Props> = ({ image, alt, showCloserLook, setCloserLook }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (showCloserLook) {
      closeButtonRef.current?.focus()
    }
  }, [showCloserLook])

  useEffect(() => {
    setImageLoaded(false)
  }, [image])

  return (
    <FullScreenContainer
      onClick={() => setCloserLook(false)}
    >
      <FullScreenContent>
        {/* Button included for a11y reasons */}
        <CloseButton
          onClick={() => setCloserLook(false)}
          tabIndex={0}
          ref={closeButtonRef}
        >
          <XLg />
        </CloseButton>
        <Image
          src={image}
          alt={alt}
          opacity={imageLoaded ? 1 : 0}
          onLoad={() => setImageLoaded(true)}
        />
      </FullScreenContent>
    </FullScreenContainer>
  )
}

export default CloserLook