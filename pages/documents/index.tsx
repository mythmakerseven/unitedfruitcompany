import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: Post[]
}

const Documents: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Documents - United Fruit Company</title>
        <meta name="description" content="Documents related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Documents'
        posts={posts}
      />
    </WideContainer>
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