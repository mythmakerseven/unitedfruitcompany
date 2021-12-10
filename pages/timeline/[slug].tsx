import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPostData, getSlugs } from '../../lib/posts'
import { DisplayedPost, PostParams } from '../../lib/types'
import Container, { FullWidthContainer } from '../../components/Container'
import TimelinePost from '../../components/TimelinePost'

interface Props {
  postData: DisplayedPost
}

const TimelineView: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{`${postData.title} - United Fruit Company`}</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullWidthContainer backgroundColor='black'>
        <Container>
          <TimelinePost post={postData} />
        </Container>
      </FullWidthContainer>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs('Timeline')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PostParams

  const postData = await getPostData(slug, 'Timeline')
  return {
    props: {
      postData
    }
  }
}

export default TimelineView