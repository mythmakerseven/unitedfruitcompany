import SearchPane from '.'
import { MobilePaneDiv } from './styles'
import { PaneProps } from './types'

const MobilePane: React.FC<PaneProps> = ({ tags, filter, setFilter}) => {
  return (
    <MobilePaneDiv>
      <SearchPane
        tags={tags}
        filter={filter}
        setFilter={setFilter}
      />
    </MobilePaneDiv>
  )
}

export default MobilePane