import React from 'react';
import PropTypes from 'prop-types';
import ProductDetail from '../ProductDetail/ProductDetail';
import TotalSection from '../TotalSection/TotalSection';
import './ResumeSection.scss';

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

ResumeSection.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ResumeSection;