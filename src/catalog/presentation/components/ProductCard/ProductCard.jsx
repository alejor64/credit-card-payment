import React from 'react';
import './ProductCard.scss';

const TextInfo = ({label, text}) => {
  return (
    <div className='text-info-container'>
      <label className='title'>{label}: </label>
      <p className='text'>{text}</p>
    </div>
  )
};

const ProductCard = ({product}) => {
  return (
    <div key={product.slug} className='product-card'>
      <img src={product.img} alt={product.name} className='image-product' />
      <div className='product-info'>
        <TextInfo label={'Description'} text={product.descriptions} />
        <TextInfo label={'Stoke'} text={product.stoke} />
        <TextInfo label={'Price'} text={`$${product.price}`} />
        <div className='size-container'>
          <label>Sizes: </label>
          <div className='size-wrapper'>
            {
              product.size.map(size => (
                <div key={size} className='size'>
                  <span>{size}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;