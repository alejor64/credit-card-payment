import React from 'react';
import './ResumeSection.scss';
import ProductDetail from '../ProductDetail/ProductDetail';
import TotalSection from '../TotalSection/TotalSection';

const ResumeSection = ({products}) => {
  return (
    <div className='resume-section'>
      <div className='products-container'>
        {
          products.map(product => (
            <ProductDetail key={product.slug} product={product} />
          ))
        }
      </div>
      <TotalSection products={products} />
    </div>
  )
};

export default ResumeSection;