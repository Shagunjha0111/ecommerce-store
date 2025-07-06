
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const increaseQty = (index) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[index].quantity += 1;
      return updated;
    });
  };

  const decreaseQty = (index) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      if (updated[index].quantity > 1) {
        updated[index].quantity -= 1;
      } else {
        updated.splice(index, 1); // Remove item if quantity hits 0
      }
      return updated;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
