import React, { useRef } from 'react'
import { ListedPost } from '../../lib/types'
import Banner from './Banner'
import GridItem from './GridItem'
import {
  Container
} from './styles'

interface Props {
  posts: ListedPost[]
}

const PostTimeline: React.FC<Props> = ({ posts }) => {
  const gridRef = useRef<HTMLDivElement>(null)

  // Sort the posts by date (they're all titled e.g. 1880-1900)
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
    return 0
  })

  // Temporary to make the page less ugly until we get images set up for all the posts.
  const bgs = [
    'black',
    '#34568B',
    'navy',
    'maroon',
    '#274e13',
    '#1C3728',
    '#741b47'
  ]

  return (
    <Container>
      <Banner scrollToContent={() => gridRef.current?.scrollIntoView( { behavior: 'smooth' })} />
      <div ref={gridRef}>
        {sortedPosts.map((post, index) => {
          return (
            <GridItem
              key={post.ID}
              post={post}
              backgroundColor={bgs[index]}
            >
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
            </GridItem>
          )})
        }
      </div>
    </Container>
  )
}

export default PostTimeline