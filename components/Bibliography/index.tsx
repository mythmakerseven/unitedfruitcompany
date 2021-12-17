import TypeWriterScript from '../../components/TypewriterScript'
import BibliographyCard from '../BibliographyCard'
import { Post } from '../../lib/types'
import {
  Container,
  Header,
  PostList
} from './styles'

interface Props {
  items: Post[]
}

const Bibliography: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <Header>
        <TypeWriterScript
          text={'Resources'}
          averageDuration={1000}
        />
      </Header>
      <PostList>
        {items.map(item =>
          <BibliographyCard
            item={item}
            key={item.ID}
          >
            {item.title}
          </BibliographyCard>
          )}
      </PostList>
    </Container>
  )
}

export default Bibliography