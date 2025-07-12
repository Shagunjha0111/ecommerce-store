
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/productsData';
import toast from 'react-hot-toast'; // ✅ Import toast

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div className="p-4">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('✅ Added to cart!');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-start">
      <img
        src={product.image}
        alt={product.name}
        className="w-full sm:w-1/2 max-h-[400px] object-cover rounded shadow"
      />

      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>

        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
