import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPostData, getSlugs, getTimelineMatches } from '../../lib/posts'
import { DisplayedPost, PostParams } from '../../lib/types'
import Container, { FullWidthContainer } from '../../components/Container'
import TimelinePost from '../../components/TimelinePost'

interface Props {
  postData: DisplayedPost,
  bios: DisplayedPost[],
  docs: DisplayedPost[],
  articles: DisplayedPost[]
}

const TimelineView: NextPage<Props> = ({ postData, bios, docs, articles }) => {
  return (
    <div>
      <Head>
        <title>{`${postData.title} - United Fruit Company`}</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullWidthContainer backgroundColor='black'>
        <Container>
          <TimelinePost
            post={postData}
            bios={bios}
            docs={docs}
            articles={articles}
          />
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
  // The timeline narrative post itself
  const { slug } = context.params as PostParams

  // The other posts connected to this time period
  const bios = await getTimelineMatches(slug, 'biographies')
  const docs = await getTimelineMatches(slug, 'documents')
  const articles = await getTimelineMatches(slug, 'articles')

  const postData = await getPostData(slug, 'Timeline')
  return {
    props: {
      postData,
      bios,
      docs,
      articles
    }
  }
}

export default TimelineView