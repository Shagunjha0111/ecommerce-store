import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert("Payment Successful! Thank you for shopping.");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-green-100 text-gray-800 px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">Checkout</h1>

        <ul className="divide-y divide-gray-200 mb-6">
          {cart.map((item, index) => (
            <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 w-full sm:w-auto">
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right font-semibold text-sm sm:text-base w-full sm:w-auto">
                ₹{item.price * item.quantity}
              </div>
            </li>
          ))}
        </ul>

        <div className="text-lg font-semibold mb-6 text-right">Total: ₹{total}</div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

