
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';

const Navbar = ({ setQuery }) => {
  const { cart } = useCart();

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 py-3 bg-blue-600 text-white shadow-md w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img
          src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </Link>

      {/* Search bar - grow to fit center */}
      <div className="w-full sm:flex-1 sm:mx-6">
        <SearchBar setQuery={setQuery} />
      </div>

      {/* Cart button */}
      <Link
        to="/cart"
        className="relative bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-100 transition shrink-0"
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
