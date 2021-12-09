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
  const itemRef = useRef([])

  const handleScroll = () => {
    setScrollHeight(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const postHeight = Math.max(window.innerHeight, 800)
    const currentHeight = window.scrollY - window.innerHeight
    const currentIndex = Math.round(currentHeight / postHeight)
    const displayIndex = currentIndex < 0 ? 1 : currentIndex
    setCurrentPost(posts[displayIndex])
  }, [posts, scrollHeight])

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
              <div
                key={post.ID}
                ref={itemRef.current[index]}
              >
                <InfoBox
                  scrollHeight={scrollHeight}
                  post={post}
                  index={index + 1}
                >
                  <h1>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
                </InfoBox>
              </div>
            )})
          }
        </div>
        <ImageBox currentPost={currentPost} />
      </Grid>
    </Container>
  )
}

export default PostTimeline