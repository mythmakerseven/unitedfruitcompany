import { Post } from '../../lib/types'
import {
  Box
} from './styles'
import {
  Film,
  Book,
  Globe,
  Image,
  Bookmark
} from 'react-bootstrap-icons'

interface Props {
  item: Post
}

const BibliographyCard: React.FC<Props> = ({ item }) => {
  const displayIcon = () => {
    const tags = item.tags.labelTags.map(t => t.toLowerCase())

    if (tags.includes('book')) {
      return <Book />
    } else if (tags.includes('video')) {
      return <Film />
    } else if (tags.includes('picture') || tags.includes('photo') || tags.includes('image')) {
      return <Image />
    } else if (tags.includes('website')) {
      return <Globe />
    } else {
      return <Bookmark />
    }
  }

  return (
    <Box>
      { displayIcon() }
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </Box>
  )
}

export default BibliographyCard