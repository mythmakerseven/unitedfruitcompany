import { useEffect, useState } from "react"

interface Props {
  text: string
}

const getOpacity = (itemIndex: number, currentIndex: number) => {
  if (itemIndex < currentIndex) {
    return '1'
  } else {
    return '0'
  }
}

const createSpans = (text: string, currentIndex: number) => {
  return text.split('').map((char, index) => <span key={index} style={{ filter: `opacity(${getOpacity(index, currentIndex)})` }}>{char}</span>)
}

const TypeWriterScript: React.FC<Props> = ({ text }) => {  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [atomizedElements, setAtomizedElements] = useState(createSpans(text, currentIndex))

  useEffect(() => {
    if (currentIndex < text.length + 1) {
      const timeout = Math.floor(Math.random() * 150)
      const timedFunction = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setAtomizedElements(createSpans(text, currentIndex))
      }, timeout)

      // Return a cleanup function that cancels the timeout if the component unmounts.
      return () => { clearTimeout(timedFunction) }
    }
  }, [atomizedElements, currentIndex, text])

  return (
    <>
      { atomizedElements }
    </>
  )
}

export default TypeWriterScript