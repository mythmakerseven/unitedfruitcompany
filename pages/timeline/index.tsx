import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import TypewriterScript from '../../components/TypewriterScript'
import { Header, CardFlex } from '../../styles/PostListings.style'
import PostCard from '../../components/PostCard'

interface Props {
  posts: Post[]
}

const Timeline: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Timeline - United Fruit Company</title>
        <meta name="description" content="The United Fruit Company Timeline." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Timeline'} />
      </Header>
      <CardFlex>
        {posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
      </CardFlex>
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Timeline')
  return {
    props: {
      posts
    }
  }
}

export default Timeline