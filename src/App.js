// import "./App.css";
import FilterableAccountTable from "./Components/FilterableAccountTable";

const ACCOUNTS = [
  {
    id: "0001",
    amount: "$1",
    empty: true,
    name: "Jonas",
    surname: "Jonaits",
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
    surname: "Bubke",
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kija Bank</h1>
      </header>
      <FilterableAccountTable accounts={ACCOUNTS} />
    </div>
  );
}

export default App;
