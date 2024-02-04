import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { productsRoute } from '../../../../catalog/infrastructure/routes';
import { paymentRoute } from '../../../../payments/infrastructure/routes';
import './TotalSection.scss';

const TotalSection = ({products}) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    setPrice(total);
  }, [products, setPrice])

  const navigateTo = (route) => navigate(route);;
  
  return (
    <div className='price-contianer'>
      <div className='price-section'>
        <p className='price'>Total: <span>${price}</span></p>
      </div>
      <div className='finish-section'>
        <button className='btn' onClick={() => navigateTo(paymentRoute)}>Finish</button>
        <button className='btn' onClick={() => navigateTo(productsRoute)}>Got to products</button>
      </div>
    </div>
  )
};

TotalSection.propTypes = {
  product: PropTypes.array,
};

export default TotalSection;