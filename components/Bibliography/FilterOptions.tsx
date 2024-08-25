import FilterButton from "./FilterButton";
import { Menu } from "./FilterOptions.styles";

interface Props {
  filter: null | string;
  setFilter: (arg: string | null) => void;
}

const FilterOptions: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Menu>
      <FilterButton type={null} filter={filter} setFilter={setFilter} />
      <FilterButton type="book" filter={filter} setFilter={setFilter} />
      <FilterButton type="periodical" filter={filter} setFilter={setFilter} />
      <FilterButton type="picture" filter={filter} setFilter={setFilter} />
      <FilterButton type="website" filter={filter} setFilter={setFilter} />
      <FilterButton type="video" filter={filter} setFilter={setFilter} />
    </Menu>
  );
};

export default FilterOptions;
