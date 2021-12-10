import { DisplayedPost } from '../../lib/types'
import ExpandableContent from './ExpandableContent'
import {
  Container,
  BackgroundHeader,
  Header
} from './styles'

interface Props {
  post: DisplayedPost
}

const TimelinePost: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <BackgroundHeader>{post.title}</BackgroundHeader>
      <div>
        <Header textAlign='left'>The narrative</Header>
        <ExpandableContent>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </ExpandableContent>
      </div>
      <div>
        <Header textAlign='right'>The people</Header>
      </div>
      <div>
        <Header textAlign='left'>In their words</Header>
      </div>
    </Container>
  )
}

export default TimelinePost