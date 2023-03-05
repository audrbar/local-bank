function SearchBar({ searchTerm, onSearchTermChange, onIsEmptyChange,isEmpty }) {
    return (
        <form className="searchbar">
            <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <label>
                <input
                type="checkbox"
                checked={isEmpty}
                onChange={(e) => onIsEmptyChange(e.target.checked)}
                />
                {' '}
                Show Not Empty Accounts Only
            </label>
        </form>
    );
}

export default SearchBar;
