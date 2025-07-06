const SearchBar = ({ setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 w-full mb-4"
    />
  );
};

export default SearchBar;
