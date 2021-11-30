import { ListedPost } from '../../lib/types'
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
  posts: ListedPost[],
  tags: string[]
}

const PostList: React.FC<Props> = ({ label, posts, tags }) => {
  const [filter, setFilter] = useState('')

  const handleFilter = (posts: ListedPost[]) => {
    const filteredPosts = posts.filter(post => {
      if (post.title.toLowerCase().includes(filter.toLowerCase())) {
        return true
      } else if (post.tags.some(tag => tag.includes(filter))) {
        return true
      } else {
        return false
      }
    })
    return filteredPosts
  }

  const displayPosts = () => {
    if (!filter) {
      return (
        posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)
      )
    } else {
      const filteredPosts = handleFilter(posts)
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