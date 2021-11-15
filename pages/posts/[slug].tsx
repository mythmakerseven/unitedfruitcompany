import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { getPostData, getSlugs } from '../../lib/posts'
import { Post, PostParams } from '../../lib/types'

interface Props {
  postData: Post
}

const Component: NextPage<Props> = ({ postData }) => {
  return (
    <div className='container'>
      <Link href="/">Home</Link>
      <h1>{ postData.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs()
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

export default Component