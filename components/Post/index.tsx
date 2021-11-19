import { Post } from "../../lib/types"
import Container from "../Container"

interface Props {
  post: Post
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  )
}

export default PostContent
