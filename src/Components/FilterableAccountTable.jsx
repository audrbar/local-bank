import { useState } from "react";
import SearchBar from "./SearchBar";
import AccountTable from "./AccountTable";

function FilterableProductTable({ accounts }) {

  const [filterText, setFilterText] = useState('');
  const [full, setFull] = useState(false);

  return (
    <div>
      <SearchBar
      filterText={filterText}
      full={full}
      onFilterTextChange={setFilterText}
      onFullChange={setFull}
      />
      <AccountTable
      accounts={accounts}
      filterText={filterText}
      full={full}
      />
    </div>
  );
}

  export default FilterableProductTable;