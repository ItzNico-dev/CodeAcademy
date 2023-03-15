import React from 'react';
import Product from '../Product/Product.jsx';

export default function Products() {
  const products = [
    {
      id: 1,
      category: 'Canvases',
      name: 'OFF_WHIRTE AIR',
      price: '100$ - 200$',
    },
    {
      id: 2,
      category: 'Canvases2',
      name: 'OFF_WHIRTE AIR 2',
      price: '100$ - 200$',
    },
    {
      id: 3,
      category: 'Canvases3',
      name: 'OFF_WHIRTE AIR 3',
      price: '100$ - 200$',
    },
    {
      id: 4,
      category: 'Canvases4',
      name: 'OFF_WHIRTE AIR 4',
      price: '100$ - 200$',
    },
    {
      id: 5,
      category: 'Canvases5',
      name: 'OFF_WHIRTE AIR 5',
      price: '100$ - 200$',
    },
  ];
  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
