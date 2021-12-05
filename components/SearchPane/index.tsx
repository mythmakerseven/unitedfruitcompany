import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import TagDisplay from './TagDisplay'
import { X } from 'react-bootstrap-icons'
import {
  Pane,
  Content,
  Label,
  Input,
  ResetButton,
} from './styles'
import {
  DesktopTags,
  MobileTags
} from './TagDisplay.styles'
import { PaneProps } from './types'

const PaneContent: React.FC<PaneProps> = ({ tags, setQuery }) => {
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
          <form onSubmit={(event) => handleSubmit(event)}>
            <Label>
              Search:
              <Input
                type='text'
                value={searchValue}
                name='query'
                ref={searchInputRef}
                onChange={(event) => handleQueryChange(event)}
              />
              {handleResetButton()}
            </Label>
          </form>
          <DesktopTags>
            <TagDisplay
              tags={tags}
              defaultTagDisplay={true}
              setQuery={setQuery}
              setSearchValue={setSearchValue}
            />
          </DesktopTags>
          <MobileTags>
            <TagDisplay
              tags={tags}
              defaultTagDisplay={false}
              setQuery={setQuery}
              setSearchValue={setSearchValue}
            />
          </MobileTags>
        </Content>
      </Pane>
    </>
  )
}

export default PaneContent