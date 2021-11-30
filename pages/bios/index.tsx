import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getCategory, getTags } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: Post[],
  tags: string[]
}

const Biographies: NextPage<Props> = ({ posts, tags }) => {
  return (
    <WideContainer>
      <Head>
        <title>Biographies - United Fruit Company</title>
        <meta name="description" content="Biographies related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Biographies'
        posts={posts}
        tags={tags}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCategory('Biographies')
  const tags = await getTags('Biographies')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Biographies