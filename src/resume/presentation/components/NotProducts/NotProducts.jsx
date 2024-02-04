import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotProducts.scss';
import { productsRoute } from '../../../../catalog/infrastructure/routes';

const NotProducts = () => {
  const navigate = useNavigate();

  const goProducts = () => navigate(productsRoute);

  return (
    <div className='not-fount-contianer'>
      <div className='text-info'>
        <h2 className='title'>You do not have product to buy yet</h2>
        <button className='btn' onClick={goProducts}>Go to products</button>
      </div>
    </div>
  )
};

export default NotProducts;