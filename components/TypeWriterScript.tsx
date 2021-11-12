import { useEffect, useState } from "react"

interface Props {
  text: string
}

const TypeWriterScript: React.FC<Props> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('')

  useEffect(() => {
    if (displayedText !== text) {
      const timeout = Math.floor(Math.random() * 130)
      setTimeout(() => setDisplayedText(`${displayedText}${text[displayedText.length]}`), timeout)
    }
  }, [displayedText, text])

  return (
    <>
      { displayedText }
    </>
  )
}

export default TypeWriterScript