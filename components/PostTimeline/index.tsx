import React, { useEffect, useRef, useState } from 'react'
import { ListedPost } from '../../lib/types'
import Banner from './Banner'
import ImageBox from './ImageBox'
import InfoBox from './InfoBox'
import {
  Grid,
  Container,
  NavButton
} from './styles'

interface Props {
  posts: ListedPost[]
}

const PostTimeline: React.FC<Props> = ({ posts }) => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activePost, setActivePost] = useState(posts[0])

  const gridRef = useRef<HTMLDivElement>(null)

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
    if (!window) {
      setActivePost(posts[0])
    } else {
      const currentHeight = window.scrollY - window.innerHeight
      const currentIndex = Math.round(currentHeight / window.innerHeight)

      let displayIndex
      // Handle what to do if the user scrolls below or above the component.
      if (currentIndex < 0) {
        displayIndex = 0
      } else if (currentIndex > posts.length - 1) {
        displayIndex = posts.length - 1
      } else {
        displayIndex = currentIndex
      }

      setActivePost(posts[displayIndex])
      setCurrentIndex(displayIndex)
    }
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

  const scrolltoItem = (index: number) => {
    const amountToScroll = window.innerHeight + (window.innerHeight * index)
    window.scroll({ top: amountToScroll, behavior: 'smooth' })
  }

  return (
    <Container>
      <Banner scrollToContent={() => gridRef.current?.scrollIntoView( { behavior: 'smooth' })} />
      <Grid ref={gridRef}>
        <NavButton
          isActive={activePost !== posts[0]}
          direction='up'
          onClick={() => scrolltoItem(currentIndex - 1)}
        >
          &#8593;
        </NavButton>
        <NavButton
          isActive={activePost !== posts[posts.length - 1] && typeof window !== 'undefined' && window.scrollY >= window.innerHeight}
          direction='down'
          onClick={() => scrolltoItem(currentIndex + 1)}
        >
          &#8595;
        </NavButton>
        <div>
          {sortedPosts.map(post => {
            return (
              <div
                key={post.ID}
              >
                <InfoBox
                  post={post}
                  activePost={activePost}
                />
              </div>
            )})
          }
        </div>
        <ImageBox activePost={activePost} />
      </Grid>
    </Container>
  )
}

export default PostTimeline