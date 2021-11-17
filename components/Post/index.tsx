import { Post } from "../../lib/types"
import Link from 'next/link'
import Container from "../Container"

interface Props {
  post: Post
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <Link href="/">Home</Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  )
}

export default PostContent
