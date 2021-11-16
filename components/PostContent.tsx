import { Post } from "../lib/types"
import Link from 'next/link'

interface Props {
  post: Post
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <div className='container'>
      <Link href="/">Home</Link>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default PostContent
