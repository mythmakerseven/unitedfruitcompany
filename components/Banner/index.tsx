import { FullwidthContainer } from './styles'

interface Props {
  header: string,
  link: string
}

const Banner: React.FC<Props> = ({ header, link }) => {
  return (
    <FullwidthContainer>
      <p>test</p>
    </FullwidthContainer>
  )
}

export default Banner