import {
  Container,
  SeeMoreButton
} from './Banner.styles'
import {
  ChevronDown
} from 'react-bootstrap-icons'

interface Props {
  scrollToContent: () => void
}

const Banner: React.FC<Props> = ({ scrollToContent }) => {
  return (
    <Container>
      <div>
        <h1>Timeline</h1>
        <p>The story of the United Fruit Company.</p>
      </div>
      <SeeMoreButton onClick={() => scrollToContent()}>
        <span>Explore</span>
        <ChevronDown />
      </SeeMoreButton>
    </Container>
  )
}

export default Banner