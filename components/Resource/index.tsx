import {
  Author,
  Title,
  Box,
  BoxContent,
  Link,
  Citation,
  IconContainer
} from './styles'
import { ArrowUpRight } from 'react-bootstrap-icons'

interface Props {
  title: string,
  author: string,
  url?: string,
  citation: string
}

const Resource: React.FC<Props> = ({ title, author, url, citation }) => {
  const showUrl = () => {
    if (url) {
      return (
        <Link>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {url}
            <IconContainer>
              <ArrowUpRight />
            </IconContainer>
          </a>
        </Link>
      )
    }
  }

  return (
    <Box>
      <BoxContent>
        <h1>
          <Title>{title}</Title>
          &nbsp;
          <Author>{author}</Author>
        </h1>
        { showUrl() }
        <Citation>{citation}</Citation>
      </BoxContent>
    </Box>
  )
}

export default Resource