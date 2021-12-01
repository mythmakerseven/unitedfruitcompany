/* eslint-disable @next/next/no-img-element */
import { ListedPost } from '../../lib/types'
import Link from 'next/link'
import {
  Container,
  Card,
  Title,
  ImageContainer,
  CardContent
} from './styles'
import { useRouter } from 'next/router'

interface Props {
  post: ListedPost
}

const PostCard: React.FC<Props> = ({ post }) => {
  const router = useRouter()

  const handleImage = () => {
    if (post.featured_image) {
      return (
        <img
          src={`${post.featured_image}?w=200`}
          alt=''
        />
      )
    } else {
      return (
        <img
          src='https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=300'
          alt=''
        />
      )
    }
  }

  return (
    <Container>
      <Link href={`${router.pathname}/${post.slug}`} passHref>
        <a>
          <Card>
            <CardContent>
              <ImageContainer>
                {handleImage()}
              </ImageContainer>
              <Title>{post.title}</Title>
            </CardContent>
          </Card>
        </a>
      </Link>
    </Container>
  )
}

export default PostCard