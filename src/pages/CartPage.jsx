import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-100 text-gray-800 px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded p-4 shadow-md bg-white space-y-4 sm:space-y-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-20 sm:h-20 h-auto object-cover rounded"
                />
                <div className="flex-1 px-0 sm:px-4 text-center sm:text-left">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center sm:space-x-2 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQty(index)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(index)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >+</button>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-bold text-center sm:text-left">
            Total: ₹{total}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-center"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-center"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

