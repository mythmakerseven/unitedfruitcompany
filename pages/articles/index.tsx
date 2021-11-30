import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPostsForDisplay, getTags } from '../../lib/posts'
import { ListedPost } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: ListedPost[],
  tags: string[]
}

const Articles: NextPage<Props> = ({ posts, tags }) => {
  return (
    <WideContainer>
      <Head>
        <title>Articles - United Fruit Company</title>
        <meta name="description" content="Articles related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        tags={tags}
        label='Articles'
        posts={posts}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Articles')
  const tags = await getTags('Articles')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Articles