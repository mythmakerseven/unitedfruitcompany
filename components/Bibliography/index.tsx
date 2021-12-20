import TypeWriterScript from '../../components/TypewriterScript'
import BibliographyCard from '../BibliographyCard'
import Container from '../Container'
import { Post } from '../../lib/types'
import {
  Header,
  PostList
} from './styles'
import { useEffect, useState } from 'react'
import FilterOptions from './FilterOptions'

interface Props {
  items: Post[]
}

const Bibliography: React.FC<Props> = ({ items }) => {
  const [itemsToShow, setItemsToShow] = useState(items)
  const [filter, setFilter] = useState<null | string>(null)

  useEffect(() => {
    if (filter) {
      // Some special handling for the different words people might use for a image. I'm doing this so people don't have
      // to remember which specific term to use when adding bibliography items.
      if (filter === 'picture') {
        setItemsToShow(items.filter(item => item.tags.labelTags.includes('picture' || 'image' || 'photo')))
      } else {
        setItemsToShow(items.filter(item => item.tags.labelTags.includes(filter)))
      }
    } else {
      setItemsToShow(items)
    }
  }, [filter, items])

  return (
    <Container>
      <Header>
        <TypeWriterScript
          text={'Resources'}
          averageDuration={1000}
        />
      </Header>
      <FilterOptions
        filter={filter}
        setFilter={setFilter}
      />
      <p style={{ textAlign: 'center' }}>(These are placeholder citations for development purposes.)</p>
      <PostList>
        {itemsToShow.map(item =>
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