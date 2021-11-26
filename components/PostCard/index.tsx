import { Post } from '../../lib/types'
import Link from 'next/link'
import { Card, Title, ImageContainer, CardContent } from './styles'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const router = useRouter()

  const handleImage = () => {
    if (post.featured_image) {
      return (
        <Image
          src={`${post.featured_image}?w=200`}
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      )
    } else {
      return (
        <Image
          src='https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=200'
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      )
    }
  }

  return (
    <Card>
      <Link href={`${router.pathname}/${post.slug}`} passHref>
        <a>
          <CardContent>
            <ImageContainer>
              {handleImage()}
            </ImageContainer>
            <Title>{post.title}</Title>
          </CardContent>
        </a>
      </Link>
    </Card>
  )
}

export default PostCard