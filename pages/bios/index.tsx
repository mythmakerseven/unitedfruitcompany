import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'

interface Props {
  posts: Post[]
}

const Biographies: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Biographies - United Fruit Company</title>
        <meta name="description" content="Biographies related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">Home</Link>
      <h3>Here are some cool upcoming biographies:</h3>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/bios/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Biographies')
  return {
    props: {
      posts
    }
  }
}

export default Biographies