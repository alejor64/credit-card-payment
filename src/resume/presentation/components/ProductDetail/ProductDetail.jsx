import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import RemoveProduct from '../RemoveProduct/RemoveProduct';
import './ProductDetail.scss';
import { productRoute } from '../../../../product/infrastructure/routes';

const ProductDetail = ({product}) => {
  const navigate = useNavigate();

  const goProduct = () => navigate(productRoute(product.slug));

  return (
    <div className='product-section'>
      <div className='product-info' onClick={goProduct}>
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
      <RemoveProduct product={product} />
    </div>
  )
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ProductDetail;