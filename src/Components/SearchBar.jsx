function SearchBar({ filterText, onFilterTextChange }) {
    return (
        <form>
            <input
            type="text"
            value={filterText}
            placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)}
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
