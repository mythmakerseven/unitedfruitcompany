import { DisplayedPost } from '../../lib/types'
import {
  Container
} from './styles'

interface Props {
  post: DisplayedPost
}

const TimelinePost: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  )
}

export default TimelinePost