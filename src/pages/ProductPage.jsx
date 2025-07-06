import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/productsData.js';

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  const { addToCart } = useCart(); // ✅ use context

  if (!product) return <div className="p-4">Product not found</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-xl">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)} // ✅ proper handler
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
