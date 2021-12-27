import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getAboutPost } from '../lib/posts'
import { Post as PostType } from '../lib/types'
import Post from '../components/Post'
import Container from '../components/Container'

interface Props {
  post: PostType
}

const Resources: NextPage<Props> = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>About - United Fruit Company</title>
        <meta name="description" content="About the United Fruit Company Digital Archive." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post
        post={post}
      />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getAboutPost()
  return {
    props: {
      post
    }
  }
}

export default Resources