import React from 'react';
import './ProductCard.scss';
import { useNavigate } from 'react-router-dom';
import { TextInfo } from '../../../../shared/presentation/components/TextInfo/TextInfo';
import ShowList from '../../../../shared/presentation/components/ShowList/ShowList';
import { productRoute } from '../../../../product/infrastructure/routes';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(productRoute(product.slug));

  return (
    <div key={product.slug} className='product-card' onClick={handleClick}>
      <img src={product.img} alt={product.name} className='image-product' />
      <div className='product-info'>
        <TextInfo text={product.description} />
        <TextInfo label={'Stoke'} text={product.stoke} />
        <TextInfo label={'Price'} text={`$${product.price}`} />
        <ShowList list={product.size} title={'Sizes'} className='sizes' />
      </div>
    </div>
  )
}

export default ProductCard;