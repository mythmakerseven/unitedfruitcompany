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

const Pictures: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Pictures - United Fruit Company</title>
        <meta name="description" content="Pictures related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Pictures'} />
      </Header>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/pictures/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Photos')
  return {
    props: {
      posts
    }
  }
}

export default Pictures