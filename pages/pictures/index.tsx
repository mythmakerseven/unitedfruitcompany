import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'

interface Props {
  posts: Post[]
}

const Pictures: NextPage<Props> = ({ posts }) => {
  return (
    <div className='container'>
      <Link href="/">Home</Link>
      <h3>Here are some cool upcoming pictures:</h3>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/pictures/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Photos')
  return {
    props: {
      posts
    }
  }
}

export default Pictures