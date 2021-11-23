import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ResourceDisplay from '../../components/ResourceDisplay'
import { getPostData, getSlugs } from '../../lib/posts'
import { Post, PostParams } from '../../lib/types'
import Container from '../../components/Container'
import Banner from '../../components/Banner'

interface Props {
  postData: Post
}

const PictureView: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{`${postData.title} - United Fruit Company`}</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        header='Pictures'
        previousSlug={postData.previousSlug}
        nextSlug={postData.nextSlug}
      />
      <Container>
        <ResourceDisplay post={postData} />
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs('Photos')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PostParams

  const postData = await getPostData(slug, 'Photos')
  return {
    props: {
      postData
    }
  }
}

export default PictureView