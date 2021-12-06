import { ListedPost } from '../../lib/types'
import TypewriterScript from '../TypewriterScript'
import PostCard from '../PostCard'
import SearchPane from '../SearchPane'
import { ThreeDots } from 'react-bootstrap-icons'
import {
  Header,
  CardFlex,
  Container,
  Error,
  LoadingIcon
} from './styles'
import { useEffect, useRef, useState } from 'react'
import { useQueryState } from 'next-usequerystate'

interface Props {
  label: string, // e.g. "Biographies"
  posts: ListedPost[],
  tags: string[]
}

const PostList: React.FC<Props> = ({ label, posts, tags }) => {
  const [displayedPosts, setDisplayedPosts] = useState(posts)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useQueryState('search')

  const mountedRef = useRef(true)

  // Remember when it's unmounted so we can avoid trying to update
  // state in the async call below.
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      const searchResponse = await fetch(`/api/${label}/search/${query}`)

      if (!mountedRef.current) {
        return null
      }

      const matchingPosts = await searchResponse.json()

      setDisplayedPosts(matchingPosts)
      setLoading(false)
    }

    if (!query || query === '') {
      setDisplayedPosts(posts)
    } else {
      getPosts()
    }
  }, [query, posts, label])

  const displayPosts = () => {
    if (loading) {
      return (
        <LoadingIcon>
          <ThreeDots />
        </LoadingIcon>
      )
    }

    if (displayedPosts.length > 0) {
      return (
        <CardFlex>
          {displayedPosts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
        </CardFlex>
      )
    } else {
      return (
        <Error>Nothing found :(</Error>
      )
    }
  }

  return (
    <>
      <Container>
        <SearchPane
          tags={tags}
          setQuery={setQuery}
        />
        <div>
          <Header>
            <TypewriterScript
              text={label}
              averageDuration={1000}
            />
          </Header>
          { displayPosts() }
        </div>
      </Container>
    </>
  )
}

export default PostList