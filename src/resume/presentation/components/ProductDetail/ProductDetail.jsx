import React from 'react';
import './ProductDetail.scss';

const ProductDetail = ({product}) => {
  return (
    <div className='product-section'>
      <div className='product-info'>
        <div className='img-container'>
          <img src={product.img} />
        </div>
        <div className='text-info'>
          <h4 className='name'>{product.name}</h4>
          <p className='info'>{product.description}</p>
        </div>
      </div>
      <div className='price-container'>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  )
};

export default ProductDetail;