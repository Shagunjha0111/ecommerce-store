import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => setView('grid')} className="px-4 py-1 bg-gray-200">Grid</button>
        <button onClick={() => setView('list')} className="px-4 py-1 bg-gray-200">List</button>
      </div>
      <div className={view === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;