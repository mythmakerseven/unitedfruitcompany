import {
  Film,
  Book,
  Globe,
  Image as BSImage, // Fix a linting error where eslint thinks this is an img component
  Bookmark
} from 'react-bootstrap-icons'

interface Props {
  type: string | null
}

const getIcon = (type: string | null) => {
  switch(type) {
    case 'book':
      return (<Book />)
    case 'video':
      return (<Film />)
    case 'picture':
      return <BSImage />
    case 'photo':
      return <BSImage />
    case 'image':
      return <BSImage />
    case 'website':
      return <Globe />
    default:
      return <Bookmark />
  }
}

const BibTypeIcon: React.FC<Props> = ({ type }) => {
  return (
    <>
      { getIcon(type) }
    </>
  )
}

export default BibTypeIcon