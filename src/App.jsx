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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar setQuery={setQuery} />

     

      {/* Main page content container */}
      <main className="px-4 sm:px-6 py-6">
        <Routes>
          <Route path="/" element={<Home query={query} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
