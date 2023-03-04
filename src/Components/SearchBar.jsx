function SearchBar({ searchTerm, onSearchTermChange, isEmpty, setIsEmpty }) {
    return (
        <form className="searchbar">
            <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <label>
                <input type="checkbox"/>
                {' '}
                Show Full Accounts
            </label>
        </form>
    );
}

export default SearchBar;
