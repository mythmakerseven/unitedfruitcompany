import { PaneProps } from './types'
import PaneContent from './PaneContent'

const SearchPane: React.FC<PaneProps> = ({ tags, setQuery }) => {
  return (
    <PaneContent
      tags={tags}
      setQuery={setQuery}
    />
  )
}

export default SearchPane