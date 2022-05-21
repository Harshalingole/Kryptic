import "./searchbox.css";

function SearchBar({ className, onChangeHandeler, placeholder }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        className={`srch-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandeler}
      />
    </div>
  );
}

export default SearchBar;
