import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'

interface Props {
  posts: Post[]
}

const Timeline: NextPage<Props> = ({ posts }) => {
  return (
    <div className='container'>
      <Head>
        <title>Timeline - United Fruit Company</title>
        <meta name="description" content="The United Fruit Company Timeline." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h3>Here are some cool upcoming timeline posts:</h3>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/timeline/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Timeline')
  return {
    props: {
      posts
    }
  }
}

export default Timeline