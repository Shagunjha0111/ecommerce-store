import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, view }) => {
  const { addToCart } = useCart();

  return (
    <div
      className={`border p-4 rounded shadow bg-white ${
        view === 'grid'
          ? 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
          : 'flex flex-col sm:flex-row w-full'
      }`}
    >
      {view === 'grid' ? (
        <div className="w-full aspect-[4/3] flex items-center justify-center bg-white mb-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded"
          />
        </div>
      ) : (
        <div className="w-full sm:w-32 h-48 sm:h-32 flex items-center justify-center bg-white mb-2 sm:mb-0 sm:mr-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded"
          />
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <Link
            to={`/product/${product.id}`}
            className="text-blue-600 hover:underline"
          >
            View
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
