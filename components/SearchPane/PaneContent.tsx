import { ChangeEvent, FormEvent } from 'react'
import TagDisplay from './TagDisplay'
import { X } from 'react-bootstrap-icons'
import {
  Pane,
  Content,
  Label,
  Form,
  Input,
  ResetButton
} from './styles'
import { PaneProps } from './types'

const PaneContent: React.FC<PaneProps> = ({ tags, filter, setFilter }) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Pane>
        <Content>
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
        </Content>
      </Pane>
    </>
  )
}

export default PaneContent