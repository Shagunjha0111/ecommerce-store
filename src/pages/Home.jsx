
import ProductList from '../components/ProductList';
import productsData from '../data/productsData';

const Home = ({ query = '' }) => {
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
          Explore Our Products
        </h1>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;


