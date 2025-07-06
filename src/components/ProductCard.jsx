
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, view }) => {
  const { addToCart } = useCart();

  return (
    <div className={view === 'grid' ? 'border p-4 rounded shadow' : 'flex border p-4 rounded shadow'}>
      {view === 'grid' ? (
  <div className="w-full h-40 flex items-center justify-center bg-white mb-2">
    <img
      src={product.image}
      alt={product.name}
      className="max-h-full object-contain"
    />
  </div>
) : (
  <div className="w-32 h-32 flex items-center justify-center bg-white mr-4">
    <img
      src={product.image}
      alt={product.name}
      className="max-h-full object-contain"
    />
  </div>
)}

      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>
        <div className="flex items-center space-x-4 mt-2">
          <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">View</Link>
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
