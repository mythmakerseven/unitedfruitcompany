import { Post } from '../../lib/types'
import BibTypeIcon from '../Bibliography/BibTypeIcon'
import {
  Box
} from './styles'

interface Props {
  item: Post
}

const BibliographyCard: React.FC<Props> = ({ item }) => {
  return (
    <Box>
      <BibTypeIcon
        type={item.tags.labelTags.length > 0 ? item.tags.labelTags[0] : null}
      />
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </Box>
  )
}

export default BibliographyCard