import React from 'react';
import ProductGrid from './product_grid';
import MayAlsoLike from './may_also_like';

const Product = () => {
  return (
    <div>
      <ProductGrid />
      <h1 style={{ textAlign: 'center' }}>You May Also Like</h1>
      <MayAlsoLike />
    </div>
  );
};

export default Product;
