import { useState } from "react";
import SearchBar from "./SearchBar";
import AccountTable from "./AccountTable";

function FilterableAccountTable({ accounts }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div>
      <SearchBar
      searchTerm={searchTerm}
      isEmpty={isEmpty}
      onSearchTermChange={setSearchTerm}
      onIsEmptyChange={setIsEmpty}
      />
      <AccountTable
      accounts={accounts}
      searchTerm={searchTerm}
      isEmpty={isEmpty}
      />
    </div>
  );
}

  export default FilterableAccountTable;