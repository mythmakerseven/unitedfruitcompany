import { ChangeEvent, FormEvent } from 'react'
import TagDisplay from './TagDisplay'
import { X } from 'react-bootstrap-icons'
import {
  Pane,
  PaneContent,
  Label,
  Form,
  Input,
  ResetButton
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
            <ResetButton type='reset' onClick={() => setFilter('')}>
              <X />
            </ResetButton>
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