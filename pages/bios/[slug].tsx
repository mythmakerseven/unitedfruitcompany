import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import PostContent from '../../components/Post'
import { getPostData, getSlugs } from '../../lib/posts'
import { Post, PostParams } from '../../lib/types'
import Container from '../../components/Container'
import Banner from '../../components/Banner'

interface Props {
  postData: Post
}

const BioView: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{ `${postData.title} - United Fruit Company` }</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '') } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        header='Biographies'
        link='/bios'
      />
      <Container>
        <PostContent post={postData} />
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs('Biographies')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PostParams

  const postData = await getPostData(slug)
  return {
    props: {
      postData
    }
  }
}

export default BioView