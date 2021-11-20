import { Post } from '../../lib/types'
import TypewriterScript from '../TypewriterScript'
import { Title } from './styles'

interface Props {
  post: Post
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Title>
        <TypewriterScript text={post.title} />
      </Title>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

export default PostContent
