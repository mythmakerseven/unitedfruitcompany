import { useState } from 'react'
import TagToggle from './TagToggle'
import {
  TagContainer,
  MobileHeaderContainer,
  DesktopHeaderContainer,
  Header,
  TagList,
  TagItem,
} from './TagDisplay.styles'

interface Props {
  tags: string[],
  defaultTagDisplay: boolean,
  setQuery: (arg: string) => void
}

const TagDisplay: React.FC<Props> = ({ tags, defaultTagDisplay, setQuery }) => {
  const [showTags, setShowTags] = useState(defaultTagDisplay)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      setQuery((event.target as HTMLElement).innerText)
    }
  }

  const handleTagDisplay = () => {
    if (showTags && tags.length > 0) {
      return (
        <TagList>
          {tags.map((tag, index) => (
            <TagItem
              tabIndex={0}
              key={index}
              onClick={() => setQuery(tag)}
              onKeyDown={(event) => handleKeyDown(event)}
            >
              {tag}
            </TagItem>
          ))}
        </TagList>
      )
    }
  }

  // There's no need to display this stuff if there are no tags at all.
  if (tags.length === 0) {
    return null
  }

  return (
    <TagContainer>
      <MobileHeaderContainer onClick={() => setShowTags(!showTags)}>
        <Header>Popular tags in this category</Header>
        <TagToggle
          display={showTags}
        />
      </MobileHeaderContainer>
      <DesktopHeaderContainer>
        <Header>Popular tags in this category</Header>
      </DesktopHeaderContainer>
      {handleTagDisplay()}
    </TagContainer>
  )
}

export default TagDisplay