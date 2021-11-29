import { Post } from '../../lib/types'
import TypewriterScript from '../TypewriterScript'
import PostCard from '../PostCard'
import SearchPane from '../SearchPane'
import {
  Header,
  CardFlex,
  Container
} from './styles'
import { useState } from 'react'

interface Props {
  label: string, // e.g. "Biographies"
  posts: Post[],
  tags: string[]
}

const PostList: React.FC<Props> = ({ label, posts, tags }) => {
  const [filter, setFilter] = useState('')

  const displayPosts = () => {
    if (!filter) {
      return (
        posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)
      )
    } else {
      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
      return (
        filteredPosts.map(post => <li key={post.ID}><PostCard post={post} /></li>)
      )
    }
  }

  return (
    <>
      <Container>
        <SearchPane
          tags={tags}
          filter={filter}
          setFilter={setFilter}
        />
        <div>
          <Header>
            <TypewriterScript text={label} />
          </Header>
          <CardFlex>
            {displayPosts()}
          </CardFlex>
        </div>
      </Container>
    </>
  )
}

export default PostList