import { Post } from '../../lib/types'

interface Props {
  post: Post
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

export default PostContent
