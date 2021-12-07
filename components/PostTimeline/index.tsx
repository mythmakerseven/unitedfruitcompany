import { ListedPost } from '../../lib/types'
import GridItem from './GridItem'
import {
  Container,
  List,
} from './styles'

interface Props {
  posts: ListedPost[]
}

const PostTimeline: React.FC<Props> = ({ posts }) => {
  // Sort the posts by date (they're all titled e.g. 1880-1900)
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
    return 0
  })

  // Temporary to make the page less ugly until we get images set up for all the posts.
  const getRandomBackgrounds = (): string => {
    const bgs = [
      'black',
      '#34568B',
      'navy',
      'maroon',
      '#274e13',
      '#1C3728',
      '#741b47'
    ]

    return bgs[Math.floor(Math.random() * bgs.length)]
  }

  return (
    <Container>
      <List>
        {sortedPosts.map(post => {
          return (
            <>
              <GridItem
                key={post.ID}
                backgroundColor={getRandomBackgrounds()}
              >
                <span>testing</span>
                <span>one more line</span>
                <span>third line</span>
              </GridItem>
            </>
          )})
        }
      </List>
    </Container>
  )
}

export default PostTimeline