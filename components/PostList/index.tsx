import { Post } from '../../lib/types'
import TypewriterScript from '../TypewriterScript'
import PostCard from '../PostCard'
import { Header, CardFlex } from './styles'

interface Props {
  label: string, // e.g. "Biographies"
  posts: Post[]
}

const PostList: React.FC<Props> = ({ label, posts }) => {
  return (
    <>
      <Header>
        <TypewriterScript text={label} />
      </Header>
      <CardFlex>
        {posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
      </CardFlex>
    </>
  )
}

export default PostList