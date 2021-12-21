import TypeWriterScript from '../../components/TypewriterScript'
import BibliographyCard from '../BibliographyCard'
import Container from '../Container'
import { Post } from '../../lib/types'
import {
  Header,
  Description,
  PostList
} from './styles'
import { useEffect, useState } from 'react'
import FilterOptions from './FilterOptions'
import { a, useTrail } from '@react-spring/web'

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

  const [trail, api] =  useTrail(itemsToShow.length,
    () => ({
      config: {
        mass: 5,
        tension: 1500,
        friction: 200
      },
      from: { y: -20, opacity: 0 },
      to: { y: 0, opacity: 1 }
    })
  )

  useEffect(() => {
    api.start({ reset: true })
  }, [api, itemsToShow])

  return (
    <Container>
      <Header>
        <TypeWriterScript
          text={'Resources'}
          averageDuration={1000}
        />
      </Header>
      <Description>This page lists the sources we used, as well as other resources that we couldn&apos;t secure the rights to reproduce.</Description>
      <FilterOptions
        filter={filter}
        setFilter={setFilter}
      />
      <PostList>
        {trail.map((style, index) =>
          <a.div
            key={itemsToShow[index].ID}
            style={style}
          >
            <BibliographyCard
              item={itemsToShow[index]}
            >
              {itemsToShow[index].title}
            </BibliographyCard>
          </a.div>
        )}
      </PostList>
    </Container>
  )
}

export default Bibliography