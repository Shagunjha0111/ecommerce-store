import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';

const Navbar = ({ setQuery }) => {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </Link>

      {/* Search bar in center */}
      <div className="flex-1 mx-6">
        <SearchBar setQuery={setQuery} />
      </div>

      {/* Cart icon with item count */}
      <Link
        to="/cart"
        className="relative bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100 transition"
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
