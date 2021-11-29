import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import { Header } from '../../styles/PostListings.style'
import TypewriterScript from '../../components/TypewriterScript'
import { CardFlex } from '../../styles/PostListings.style'
import PostCard from '../../components/PostCard'

interface Props {
  posts: Post[]
}

const Articles: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Articles - United Fruit Company</title>
        <meta name="description" content="Articles related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Articles'} />
      </Header>
      <CardFlex>
        {posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
      </CardFlex>
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Articles')
  return {
    props: {
      posts
    }
  }
}

export default Articles