import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ResourceDisplay from '../../components/ResourceDisplay'
import { getPostData, getSlugs } from '../../lib/posts'
import { DisplayedPost, PostParams } from '../../lib/types'
import Container from '../../components/Container'
import Banner from '../../components/Banner'

interface Props {
  postData: DisplayedPost
}

const DocumentView: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{`${postData.title} - United Fruit Company`}</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        header='Documents'
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
  const paths = await getSlugs('Documents')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PostParams

  const postData = await getPostData(slug, 'Documents')
  return {
    props: {
      postData
    }
  }
}

export default DocumentView