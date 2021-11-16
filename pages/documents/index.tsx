import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'

interface Props {
  posts: Post[]
}

const Documents: NextPage<Props> = ({ posts }) => {
  return (
    <div className='container'>
      <Head>
        <title>Documents - United Fruit Company</title>
        <meta name="description" content="Documents related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h3>Here are some cool upcoming documents:</h3>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/documents/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Documents')
  return {
    props: {
      posts
    }
  }
}

export default Documents