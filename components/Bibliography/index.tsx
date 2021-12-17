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

export type BibTypes = null | 'book' | 'picture' | 'website' | 'video' | 'misc'

const Bibliography: React.FC<Props> = ({ items }) => {
  const [itemsToShow, setItemsToShow] = useState(items)
  const [filter, setFilter] = useState<null | BibTypes>(null)

  useEffect(() => {
    if (filter) {
      setItemsToShow(items.filter(item => item.tags.labelTags.includes(filter)))
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