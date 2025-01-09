import React from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, error } = useFetchProducts();

  if (error) return <div>Error fetching products</div>;

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;