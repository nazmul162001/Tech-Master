import ProductCard from '@/components/Products/Card';

const Products = ({ products }) => {
  return (
    <div className='my-10'>
      <h2 className='text-center text-2xl font-bold text-gray-500'>
        Featured Component
      </h2>
      <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {products?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
