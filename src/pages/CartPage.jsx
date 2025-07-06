import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded p-4 shadow-md"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* Product Info */}
                <div className="flex-1 px-4">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(index)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(index)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Buttons */}
          <div className="mt-6 text-xl font-bold">Total: ₹{total}</div>

          <div className="flex gap-4 mt-6">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
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
