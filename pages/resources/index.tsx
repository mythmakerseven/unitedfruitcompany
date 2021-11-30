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

const Resources: NextPage<Props> = ({ posts, tags }) => {
  return (
    <WideContainer>
      <Head>
        <title>Resources - United Fruit Company</title>
        <meta name="description" content="Resources related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Resources'
        posts={posts}
        tags={tags}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Resources')
  const tags = await getTags('Resources')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Resources