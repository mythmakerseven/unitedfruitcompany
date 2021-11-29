import { ChangeEvent, FormEvent } from 'react'
import TagDisplay from './TagDisplay'
import {
  Pane,
  PaneContent,
  Label,
  Form,
  Input
} from './styles'

interface Props {
  tags: string[],
  filter: string,
  setFilter: (arg: string) => void
}

const SearchPane: React.FC<Props> = ({ tags, filter, setFilter }) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  return (
    <Pane>
      <PaneContent>
        <Form onSubmit={(event) => handleSearch(event)}>
          <Label>
            Search:
            <Input
              type='text'
              value={filter}
              name='query'
              onChange={(event) => updateQuery(event)}
            />
          </Label>
        </Form>
        <TagDisplay
          tags={tags}
          setQuery={setFilter}
        />
      </PaneContent>
    </Pane>
  )
}

export default SearchPane