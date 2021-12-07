import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPostsForDisplay, getTags } from '../../lib/posts'
import { ListedPost } from '../../lib/types'
import PostTimeline from '../../components/PostTimeline'
import usePageQuery from '../../hooks/usePageQuery'

interface Props {
  posts: ListedPost[],
}

const Timeline: NextPage<Props> = ({ posts }) => {
  const postsToShow = usePageQuery('biographies', posts)

  return (
    <>
      <Head>
        <title>Timeline - United Fruit Company</title>
        <meta name="description" content="The United Fruit Company Timeline." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostTimeline
        posts={postsToShow}
      />
    </>
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