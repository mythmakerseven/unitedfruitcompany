import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TagDisplay from './TagDisplay'
import {
  Pane,
  PaneContent,
  Label,
  Form,
  Input
} from './styles'

interface Props {
  tags: string[]
}

const SearchPane: React.FC<Props> = ({ tags }) => {
  const [query, setQuery] = useState<string>('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    console.log(query)
  }, [query])

  return (
    <Pane>
      <PaneContent>
        <Form onSubmit={(event) => handleSearch(event)}>
          <Label>
            Search:
            <Input
              type='text'
              value={query}
              name='query'
              onChange={(event) => updateQuery(event)}
            />
          </Label>
        </Form>
        <TagDisplay
          tags={tags}
          setQuery={setQuery}
        />
      </PaneContent>
    </Pane>
  )
}

export default SearchPane