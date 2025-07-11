const SearchBar = ({ setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setQuery(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  );
};

export default SearchBar;
