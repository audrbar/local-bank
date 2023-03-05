import "./App.css";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Create from "./Components/Create";
import { create, destroy, edit, read } from "./localStorage";
import AccountList from "./Components/AccountList";

const KEY = "Accounts";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEmpty, setFilterEmpty] = useState(false);
  const [accountList, setAccountList] = useState(read(KEY) || []);

  const handleDeleteById = (id) => {
    const item = accountList.find((item) => item.id === id);
    if (item.amount === 0) {
      destroy(KEY, id);
      setAccountList(read(KEY));
    }
  };

  const handleCreate = (account) => {
    create(KEY, { ...account, empty: true, amount: 0 });
    setAccountList(read(KEY));
  };

  /** @param {import("./localStorage").Account} account */
  const handleEdit = (account) => {
    edit(KEY, account);
    setAccountList(read(KEY));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          Kija International Bank. Total:{" "}
          {accountList
            .map((item) => item.amount)
            .reduce((acc, curr) => acc + curr, 0)}
        </h1>
      </header>
      <Create setCreateAccount={handleCreate} />
      <SearchBar
        searchTerm={searchTerm}
        isEmpty={filterEmpty}
        onSearchTermChange={setSearchTerm}
        onIsEmptyChange={setFilterEmpty}
      />
      <AccountList
        accountList={accountList}
        searchTerm={searchTerm}
        onIsEmptyChange={setFilterEmpty}
        setDeleteAccount={handleDeleteById}
        setEditAccount={handleEdit}
        isEmpty={filterEmpty}
      />
    </div>
  );
}

export default App;
