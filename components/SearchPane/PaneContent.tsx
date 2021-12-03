import { ChangeEvent, FormEvent, useRef, useState } from 'react'
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

const PaneContent: React.FC<PaneProps> = ({ tags, defaultTagDisplay, setQuery }) => {
  // Keep the form value locally, and only dispatch a query to SearchPane on submit.
  const [searchValue, setSearchValue] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery(searchValue)
  }

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const reset = () => {
    setSearchValue('')
    setQuery('')
  }

  const handleResetButton = () => {
    if (searchValue !== '') {
      return (
        <ResetButton type='reset' onClick={() => reset()}>
          <X />
        </ResetButton>
      )
    }
  }

  return (
    <>
      <Pane>
        <Content>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Label>
              Search:
              <Input
                type='text'
                value={searchValue}
                name='query'
                ref={searchInputRef}
                onChange={(event) => handleQueryChange(event)}
              />
              { handleResetButton() }
            </Label>
          </Form>
          <TagDisplay
            tags={tags}
            defaultTagDisplay={defaultTagDisplay}
            setQuery={setQuery}
            setSearchValue={setSearchValue}
          />
        </Content>
      </Pane>
    </>
  )
}

export default PaneContent