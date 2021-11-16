import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import PostContent from '../../components/PostContent'
import { getPostData, getSlugs } from '../../lib/posts'
import { Post, PostParams } from '../../lib/types'

interface Props {
  postData: Post
}

const DocumentView: NextPage<Props> = ({ postData }) => {
  return (
    <PostContent post={postData} />
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

  const postData = await getPostData(slug)
  return {
    props: {
      postData
    }
  }
}

export default DocumentView