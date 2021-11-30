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

const Pictures: NextPage<Props> = ({ posts, tags }) => {
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
        tags={tags}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Photos')
  const tags = await getTags('Photos')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Pictures