import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'
import { Header, CardFlex } from '../../styles/PostListings.style'
import TypewriterScript from '../../components/TypewriterScript'
import PostCard from '../../components/PostCard'

interface Props {
  posts: Post[]
}

const Documents: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Documents - United Fruit Company</title>
        <meta name="description" content="Documents related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Documents'} />
      </Header>
      <CardFlex>
        {posts.map(post => <li key={post.ID}><PostCard post={post} /></li>)}
      </CardFlex>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Documents')
  return {
    props: {
      posts
    }
  }
}

export default Documents