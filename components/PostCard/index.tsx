import { Post } from '../../lib/types'
import Link from 'next/link'
import { Card, Title, ImageContainer, CardContent } from './styles'
import { useRouter } from 'next/router'

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const router = useRouter()

  const handleImage = () => {
    if (post.featured_image) {
      return (
        // Using the normal img tag here because 
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.featured_image}
          alt=''
        />
      )
    } else {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src='https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg'
          alt=''
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
            {/* <Excerpt>
              {post.excerpt.replace(/(<([^>]+)>)/ig, '')}
            </Excerpt> */}
          </CardContent>
        </a>
      </Link>
    </Card>
  )
}

export default PostCard