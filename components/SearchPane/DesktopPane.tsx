import SearchPane from '.'
import { DesktopPaneDiv } from './styles'
import { PaneProps } from './types'

const MobilePane: React.FC<PaneProps> = ({ tags, filter, setFilter }) => {
  return (
    <DesktopPaneDiv>
      <SearchPane
        tags={tags}
        filter={filter}
        setFilter={setFilter}
      />
    </DesktopPaneDiv>
  )
}

export default MobilePane