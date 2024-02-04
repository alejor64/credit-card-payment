import React, { useEffect, useState } from 'react';
import './TotalSection.scss';

const TotalSection = ({products}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    setPrice(total);
  }, [products, setPrice])
  
  return (
    <div className='price-contianer'>
      <div className='price-section'>
        <p className='price'>Total: <span>${price}</span></p>
      </div>
      <div className='finish-section'>
        <button className='btn-finish'>Finish</button>
      </div>
    </div>
  )
};

export default TotalSection;