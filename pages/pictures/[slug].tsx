import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import PostContent from '../../components/PostContent'
import { getPostData, getSlugs } from '../../lib/posts'
import { Post, PostParams } from '../../lib/types'

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
      <PostContent post={postData} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs('Pictures')
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

export default PictureView