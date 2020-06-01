import React from 'react';
import style from './UsersInfo.scss';

const ProductsImages = ({ products }) => (
  <div>
    {products.map(item => (
      <div key={item.id}>
        <img 
          alt="avatar" 
          src={`/upload/products/${item.pathImage}`} 
          width="100px" height="100px" 
        />
      </div>
    ))}
  </div>
);

export default ProductsImages;
