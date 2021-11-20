import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'
import { Header } from '../../styles/PostListings.style'
import TypewriterScript from '../../components/TypewriterScript'

interface Props {
  posts: Post[]
}

const Articles: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Articles - United Fruit Company</title>
        <meta name="description" content="Articles related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Articles'} />
      </Header>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/articles/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
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