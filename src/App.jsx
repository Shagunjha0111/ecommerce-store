import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';

function App() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;

