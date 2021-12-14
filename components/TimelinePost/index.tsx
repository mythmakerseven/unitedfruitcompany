import { DisplayedPost } from '../../lib/types'
import PostCard from '../PostCard'
import ExpandableContent from './ExpandableContent'
import {
  Container,
  BackgroundHeader,
  Header
} from './styles'

interface Props {
  post: DisplayedPost,
  bios: DisplayedPost[],
  docs: DisplayedPost[]
}

const TimelinePost: React.FC<Props> = ({ post, bios, docs }) => {
  return (
    <Container>
      <BackgroundHeader>{post.title}</BackgroundHeader>
      <div>
        <Header textAlign='left'>The narrative</Header>
        <ExpandableContent flex={false}>
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
        </ExpandableContent>
      </div>
      { bios.length > 0 ?
        <div>
          <Header textAlign='right'>The people</Header>
          <ExpandableContent flex={true}>
            { bios.map(bio => <PostCard key={bio.ID} post={bio} />) }
          </ExpandableContent>
        </div>
      : null }
      { docs.length > 0 ?
        <div>
          <Header textAlign='left'>In their words</Header>
          <ExpandableContent flex={true}>
            {docs.map(doc => <PostCard key={doc.ID} post={doc} />)}
          </ExpandableContent>
        </div>
      : '' }
    </Container>
  )
}

export default TimelinePost