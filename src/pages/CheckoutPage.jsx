import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("Payment Successful! Thank you for shopping.");
    clearCart();
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart Items */}
      <ul className="divide-y mb-4">
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between py-2">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <div className="text-lg font-semibold mb-6">
        Total: ₹{total}
      </div>

      {/* Payment Form (Mock UI) */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-1/2 p-2 border rounded"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

