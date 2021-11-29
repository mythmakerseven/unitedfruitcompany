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
  return (
    <TagContainer>
      <h3>Tags in this category:</h3>
      <TagList>
        {tags ? tags.map((tag, index) => (
          <TagItem
            tabIndex={0}
            key={index}
            onClick={() => setQuery(tag)}>{tag}
          </TagItem>
        )) : null}
      </TagList>
    </TagContainer>
  )
}

export default TagDisplay