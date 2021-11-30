import {
  MobilePaneDiv,
  DesktopPaneDiv
} from './styles'
import { PaneProps } from './types'
import PaneContent from './PaneContent'

const SearchPane: React.FC<PaneProps> = ({ tags, filter, setFilter }) => {
  return (
    <>
      <MobilePaneDiv>
        <PaneContent
          tags={tags}
          filter={filter}
          setFilter={setFilter}
        />
      </MobilePaneDiv>
      <DesktopPaneDiv>
        <PaneContent
          tags={tags}
          filter={filter}
          setFilter={setFilter}
        />
      </DesktopPaneDiv>
    </>
  )
}

export default SearchPane