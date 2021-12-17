import styled from 'styled-components'
import { BibTypes } from '.'

interface Props {
  type: BibTypes,
  filter: string | null,
  setFilter: (arg: BibTypes) => void
}

const Button = styled.button<{ selected: boolean }>`
  background: ${({ theme }) => theme.colors.thirdary};
  border: none;
  height: 40px;
  width: 40px;
  ${props => props.selected ? 'filter: brightness(0.5);' : ''}
  :hover {
    cursor: pointer;
  }
`

const FilterButton: React.FC<Props> = ({ type, filter, setFilter }) => {
  return (
    <Button
      onClick={() => setFilter(type)}
      selected={filter === type}
    >
      {type}
    </Button>
  )
}

export default FilterButton