import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPageCount, getPostsForDisplay, getTags } from '../../lib/posts'
import { ListedPost } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'
import { useQueryState } from 'next-usequerystate'
import PagePicker from '../../components/PagePicker'
import usePageQuery from '../../hooks/usePageQuery'

interface Props {
  posts: ListedPost[],
  pageCount: number,
  tags: string[]
}

const Pictures: NextPage<Props> = ({ posts, pageCount, tags }) => {
  const [, setPage] = useQueryState<number>('page')
  const postsToShow = usePageQuery('biographies', posts)

  return (
    <WideContainer>
      <Head>
        <title>Pictures - United Fruit Company</title>
        <meta name="description" content="Pictures related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Pictures'
        posts={postsToShow}
        tags={tags}
      />
      <PagePicker pageCount={pageCount} setPage={setPage} />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Pictures')
  const pageCount = await getPageCount('Pictures')
  const tags = await getTags('Pictures')
  return {
    props: {
      posts,
      pageCount,
      tags
    }
  }
}

export default Pictures