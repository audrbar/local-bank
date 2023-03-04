import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import AccountTable from "./Components/AccountTable";
import Create from "./Components/Create";
import { create } from "./localStorage";

const KEY = "Accounts";
const ACCOUNTS = [
  {
    number: "0001",
    amount: "$1",
    empty: false,
    name: "Jonas",
    surname: "Jonaitis",
  },
  {
    number: "0002",
    amount: "$1",
    empty: true,
    name: "Petras",
    surname: "Petraitis",
  },
  {
    number: "0003",
    amount: "$2",
    empty: false,
    name: "Maryte",
    surname: "Bickute",
  },
  {
    number: "0004",
    amount: "$2",
    empty: true,
    name: "Joana",
    surname: "Petre",
  },
  {
    number: "0005",
    amount: "$4",
    empty: false,
    name: "Marija",
    surname: "Skaite",
  },
  {
    number: "0006",
    amount: "$1",
    empty: true,
    name: "Vidas",
    surname: "Vidaitis",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [createAccount, setCreateAccount] = useState(null);

  useEffect(() => {
    if (null === createAccount) {
      return;
    }
    create(KEY, createAccount);
  }, [createAccount]);

  return (
    <div className="container">
      <header className="header">
        <h1>Kija International Bank</h1>
      </header>
      <SearchBar
        searchTerm={searchTerm}
        isEmpty={isEmpty}
        onSearchTermChange={setSearchTerm}
        onIsEmptyChange={setIsEmpty}
      />
      <AccountTable
        accounts={ACCOUNTS}
        searchTerm={searchTerm}
        onIsEmptyChange={setIsEmpty}
        isEmpty={isEmpty}
      />
      <Create setCreateAccount={setCreateAccount} />
    </div>
  );
}

export default App;
