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

const Documents: NextPage<Props> = ({ posts, tags }) => {
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
        tags={tags}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Documents')
  const tags = await getTags('Documents')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Documents