import {
  MobilePaneDiv,
  DesktopPaneDiv
} from './styles'
import { PaneProps } from './types'
import PaneContent from './PaneContent'

const SearchPane: React.FC<PaneProps> = ({ tags, setQuery }) => {
  return (
    <>
      <MobilePaneDiv>
        <PaneContent
          tags={tags}
          defaultTagDisplay={false}
          setQuery={setQuery}
        />
      </MobilePaneDiv>
      <DesktopPaneDiv>
        <PaneContent
          tags={tags}
          defaultTagDisplay={true}
          setQuery={setQuery}
        />
      </DesktopPaneDiv>
    </>
  )
}

export default SearchPane