import "./App.css";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import AccountTable from "./Components/AccountTable";

const ACCOUNTS = [
  {
    id: "0001",
    amount: "$1",
    empty: true,
    name: "Jonas",
    surname: "Jonaitis",
  },
  {
    id: "0002",
    amount: "$1",
    empty: true,
    name: "Petras",
    surname: "Petraitis",
  },
  {
    id: "0003",
    amount: "$2",
    empty: false,
    name: "Maryte",
    surname: "Bickute",
  },
  {
    id: "0004",
    amount: "$2",
    empty: true,
    name: "Joana",
    surname: "Petre",
  },
  {
    id: "0005",
    amount: "$4",
    empty: false,
    name: "Marija",
    surname: "Skaite",
  },
  {
    id: "0006",
    amount: "$1",
    empty: true,
    name: "Vidas",
    surname: "Vidaitis",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1>Kija Bank</h1>
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
        isEmpty={isEmpty}
      />
    </div>
  );
}

export default App;
