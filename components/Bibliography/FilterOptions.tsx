import { BibTypes } from '.'
import FilterButton from './FilterButton'
import {
  Menu
} from './FilterOptions.styles'

interface Props {
  filter: null | BibTypes,
  setFilter: (arg: BibTypes) => void
}

const FilterOptions: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Menu>
      <FilterButton type={null} filter={filter} setFilter={setFilter} />
      <FilterButton type='book' filter={filter} setFilter={setFilter} />
      <FilterButton type='picture' filter={filter} setFilter={setFilter} />
      <FilterButton type='website' filter={filter} setFilter={setFilter} />
      <FilterButton type='video' filter={filter} setFilter={setFilter} />
      <FilterButton type='misc' filter={filter} setFilter={setFilter} />
    </Menu>
  )
}

export default FilterOptions