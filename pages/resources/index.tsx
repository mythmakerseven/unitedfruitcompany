import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getBibliography, getPageCount, getTags } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import Bibliography from '../../components/Bibliography'

interface Props {
  posts: Post[],
  tags: string[]
}

const Resources: NextPage<Props> = ({ posts }) => {
  return (
    <WideContainer>
      <Head>
        <title>Resources - United Fruit Company</title>
        <meta name="description" content="Resources related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bibliography
        items={posts}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBibliography()
  const pageCount = await getPageCount('Bibliography')
  const tags = await getTags('Bibliography')
  return {
    props: {
      posts,
      pageCount,
      tags
    }
  }
}

export default Resources