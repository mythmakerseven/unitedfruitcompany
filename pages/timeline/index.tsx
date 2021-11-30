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

const Timeline: NextPage<Props> = ({ posts, tags }) => {
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
        tags={tags}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Timeline')
  const tags = await getTags('Timeline')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Timeline