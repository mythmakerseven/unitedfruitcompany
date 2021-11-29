import { Post } from '../../lib/types'
import TypewriterScript from '../TypewriterScript'
import PostCard from '../PostCard'
import SearchPane from '../SearchPane'
import {
  Header,
  CardFlex,
  Container
} from './styles'

interface Props {
  label: string, // e.g. "Biographies"
  posts: Post[]
}

const PostList: React.FC<Props> = ({ label, posts }) => {
  return (
    <>
      <Container>
        <SearchPane
          tags={['test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana', 'test', 'another tag', 'one more', 'banana']}
        />
        <div>
          <Header>
            <TypewriterScript text={label} />
          </Header>
          <CardFlex>
            {posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
          </CardFlex>
        </div>
      </Container>
    </>
  )
}

export default PostList