import React, { useEffect, useRef, useState } from 'react'
import { ListedPost } from '../../lib/types'
import Banner from './Banner'
import ImageBox from './ImageBox'
import InfoBox from './InfoBox'
import {
  Grid,
  Container
} from './styles'

interface Props {
  posts: ListedPost[]
}

const PostTimeline: React.FC<Props> = ({ posts }) => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [currentPost, setCurrentPost] = useState(posts[0])

  const gridRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    console.log('just scrolled!')
    setScrollHeight(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Sort the posts by date (they're all titled e.g. 1880-1900)
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else if (a.title < b.title) {
      return -1
    }
    return 0
  })

  return (
    <Container>
      <Banner scrollToContent={() => gridRef.current?.scrollIntoView( { behavior: 'smooth' })} />
      <Grid ref={gridRef}>
        <div>
          {sortedPosts.map((post, index) => {
            return (
              <>
                <InfoBox
                  key={post.ID}
                  scrollHeight={scrollHeight}
                  post={post}
                  index={index + 1}
                >
                  <h1>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
                </InfoBox>
              </>
            )})
          }
        </div>
        <ImageBox currentPost={currentPost} />
      </Grid>
    </Container>
  )
}

export default PostTimeline