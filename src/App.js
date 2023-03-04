// import "./App.css";
import FilterableAccountTable from "./Components/FilterableAccountTable";

const ACCOUNTS = [
  { category: "Fruits", price: "$1", full: true, name: "Apple" },
  { category: "Fruits", price: "$1", full: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", full: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", full: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", full: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", full: true, name: "Peas" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kija Bank</h1>
        <p>labas accounts</p>
      </header>
      <p>labas accounts</p>
      <FilterableAccountTable accounts={ACCOUNTS} />
    </div>
  );
}

export default App;
