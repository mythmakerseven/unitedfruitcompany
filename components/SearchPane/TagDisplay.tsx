import {
  TagContainer,
  TagList,
  TagItem
} from './TagDisplay.styles'

interface Props {
  tags: string[],
  setQuery: (arg: string) => void
}

const TagDisplay: React.FC<Props> = ({ tags, setQuery }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      setQuery((event.target as HTMLElement).innerText)
    }
  }

  return (
    <TagContainer>
      <h3>Popular tags in this category:</h3>
      <TagList>
        {tags ? tags.map((tag, index) => (
          <TagItem
            tabIndex={0}
            key={index}
            onClick={() => setQuery(tag)}
            onKeyDown={(event) => handleKeyDown(event)}
          >
            {tag}
          </TagItem>
        )) : null}
      </TagList>
    </TagContainer>
  )
}

export default TagDisplay