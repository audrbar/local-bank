import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import AccountTable from "./Components/AccountTable";
import Create from "./Components/Create";
import { create, destroy, read } from "./localStorage";

const KEY = "Accounts";

function App() {
  const [actualAccountList, setActualAccountList] = useState(Date.now());
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [createAccount, setCreateAccount] = useState(null);
  const [accountList, setAccountList] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState(null);

  useEffect(() => {
    if (null === createAccount) {
      return;
    }
    create(KEY, createAccount);
    setActualAccountList(Date.now());
  }, [createAccount]);

  useEffect(() => {
    setAccountList(read(KEY));
  }, [actualAccountList]);

  useEffect(() => {
    if (null === deleteAccount) {
      return;
    }
    destroy(KEY, deleteAccount.id);
    setActualAccountList(Date.now());
  }, [deleteAccount]);

  return (
    <div className="container">
      <header className="header">
        <h1>Kija International Bank</h1>
      </header>
      <Create setCreateAccount={setCreateAccount} />
      <SearchBar
        searchTerm={searchTerm}
        isEmpty={isEmpty}
        onSearchTermChange={setSearchTerm}
        onIsEmptyChange={setIsEmpty}
      />
      <AccountTable
        accountList={accountList}
        searchTerm={searchTerm}
        onIsEmptyChange={setIsEmpty}
        setDeleteAccount={setDeleteAccount}
        isEmpty={isEmpty}
      />
    </div>
  );
}

export default App;
