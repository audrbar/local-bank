import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import Create from "./Components/Create";
import { create, destroy, edit, read } from "./localStorage";
import AccountList from "./Components/AccountList";

const KEY = "Accounts";

function App() {
  const [updatedAccountList, setUpdatedAccountList] = useState(Date.now());
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [createAccount, setCreateAccount] = useState(null);
  const [accountList, setAccountList] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const [editAccount, setEditAccount] = useState(null);

  useEffect(() => {
    if (null === createAccount) {
      return;
    }
    create(KEY, createAccount);
    setUpdatedAccountList(Date.now());
  }, [createAccount]);

  useEffect(() => {
    setAccountList(read(KEY));
  }, [updatedAccountList]);

  useEffect(() => {
    if (null === deleteAccount) {
      return;
    }
    destroy(KEY, deleteAccount.id);
    setUpdatedAccountList(Date.now());
  }, [deleteAccount]);

  useEffect(() => {
    if (null === editAccount) {
      return;
    }
    edit(KEY, editAccount, editAccount.id);
    setUpdatedAccountList(Date.now());
  }, [editAccount]);

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
      <AccountList
        accountList={accountList}
        searchTerm={searchTerm}
        onIsEmptyChange={setIsEmpty}
        setDeleteAccount={setDeleteAccount}
        setEditAccount={setEditAccount}
        isEmpty={isEmpty}
        onEditAccountChange={setEditAccount}
      />
    </div>
  );
}

export default App;
