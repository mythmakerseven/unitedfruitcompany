import { DisplayedPost } from '../../lib/types'
import PostCard from '../PostCard'
import ExpandableContent from './ExpandableContent'
import {
  Container,
  BackgroundTitleStart,
  BackgroundTitleEnd,
  MobileTitle,
  Header
} from './styles'

interface Props {
  post: DisplayedPost,
  bios: DisplayedPost[],
  docs: DisplayedPost[],
  articles: DisplayedPost[]
}

const TimelinePost: React.FC<Props> = ({ post, bios, docs, articles }) => {
  // Keep track of the number of visible sections so we can alternate the headers
  // between right and left aligned.
  let sectionCount = 0

  const displayBios = () => {
    if (bios.length > 0) {
      sectionCount += 1
      return (
        <div>
          <Header textAlign={sectionCount % 2 === 0 ? 'left' : 'right'}>The people</Header>
          <ExpandableContent flex={true}>
            {bios.map(bio => <PostCard key={bio.ID} post={bio} />)}
          </ExpandableContent>
        </div>
      )
    }
  }

  const displayDocs = () => {
    if (docs.length > 0) {
      sectionCount += 1
      return (
        <div>
          <Header textAlign={sectionCount % 2 === 0 ? 'left' : 'right'}>In their words</Header>
          <ExpandableContent flex={true}>
            {docs.map(doc => <PostCard key={doc.ID} post={doc} />)}
          </ExpandableContent>
        </div>
      )
    }
  }

  const displayArticles = () => {
    if (articles.length > 0) {
      sectionCount += 1
      return (
        <div>
          <Header textAlign={sectionCount % 2 === 0 ? 'left' : 'right'}>Concepts</Header>
          <ExpandableContent flex={true}>
            {articles.map(article => <PostCard key={article.ID} post={article} />)}
          </ExpandableContent>
        </div>
      )
    }
  }

  return (
    <Container>
      {/* Split the title into the starting and ending year for a e s t h e t i c */}
      <BackgroundTitleStart>{post.title.slice(0, 4)}</BackgroundTitleStart>
      <BackgroundTitleEnd>{post.title.slice(5, 9)}</BackgroundTitleEnd>
      <MobileTitle>{post.title}</MobileTitle>
      <div>
        <Header textAlign='left'>The narrative</Header>
        <ExpandableContent flex={false}>
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
        </ExpandableContent>
      </div>
      { displayBios() }
      { displayDocs() }
      { displayArticles() }
    </Container>
  )
}

export default TimelinePost