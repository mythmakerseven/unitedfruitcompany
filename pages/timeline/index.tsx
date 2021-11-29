import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: Post[]
}

const Timeline: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Timeline - United Fruit Company</title>
        <meta name="description" content="The United Fruit Company Timeline." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Timeline'
        posts={posts}
      />
    </WideContainer>
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