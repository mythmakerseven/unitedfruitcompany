import { useEffect, useState } from 'react'

const useScreenHeight = () => {
  // Use screen.height for iOS because of the nonsense with their navbar.
  const [screenHeight, setScreenHeight] = useState<null | number>(null)

  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setScreenHeight(screen.height)
    }
  }, [])

  if (screenHeight) {
    return screenHeight
  } else if (typeof window !== 'undefined') {
    return window.innerHeight
  } else {
    return 0
  }
}

export default useScreenHeight