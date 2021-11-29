import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: Post[]
}

const Pictures: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Pictures - United Fruit Company</title>
        <meta name="description" content="Pictures related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Pictures'
        posts={posts}
      />
    </WideContainer>
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