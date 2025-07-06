import ProductList from '../components/ProductList';
import productsData from '../data/productsData';

const Home = ({ query = '' }) => {
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;

