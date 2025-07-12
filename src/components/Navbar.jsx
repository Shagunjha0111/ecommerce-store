

import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';

const Navbar = ({ setQuery }) => {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white shadow-md w-full overflow-x-auto flex-nowrap gap-2">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img
          src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </Link>

      {/* Search bar - flexible */}
      <div className="flex-1 min-w-[100px] max-w-[400px] mx-2">
        <SearchBar setQuery={setQuery} />
      </div>

      {/* Cart button */}
      <Link
        to="/cart"
        className="relative border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-200 shrink-0"
      >
        🛒 Cart
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
            {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
