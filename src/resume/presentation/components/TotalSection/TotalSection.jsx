import React, { useEffect, useState } from 'react';
import './TotalSection.scss';
import { useNavigate } from 'react-router-dom';
import { productsRoute } from '../../../../catalog/infrastructure/routes';
import { paymentRoute } from '../../../../payments/infrastructure/routes';

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

export default TotalSection;