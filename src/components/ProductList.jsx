
import { useCart } from '../context/CartContext';

const cardColors = [
  'bg-pink-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-yellow-100',
  'bg-purple-100',
  'bg-orange-100',
];

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`w-full max-w-sm mx-auto border p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col ${
            cardColors[index % cardColors.length]
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 object-cover rounded mb-4"
          />

          <h2 className="text-lg font-semibold mb-1 break-words whitespace-normal line-clamp-2">
            {product.name}
          </h2>

          <p className="text-gray-800 mb-4 font-medium">₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
