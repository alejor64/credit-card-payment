import React from 'react';
import './ProductCard.scss';
import { useNavigate } from 'react-router-dom';
import { TextInfo } from '../../../../shared/presentation/components/TextInfo/TextInfo';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`)
  }

  return (
    <div key={product.slug} className='product-card' onClick={handleClick}>
      <img src={product.img} alt={product.name} className='image-product' />
      <div className='product-info'>
        <TextInfo label={'Description'} text={product.description} />
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