import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'
import TypewriterScript from '../../components/TypewriterScript'
import { Header } from '../../styles/PostListings.style'

interface Props {
  posts: Post[]
}

const Timeline: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Timeline - United Fruit Company</title>
        <meta name="description" content="The United Fruit Company Timeline." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Timeline'} />
      </Header>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/timeline/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
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