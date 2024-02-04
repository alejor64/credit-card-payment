import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedProducts } from '../../../../product/application/selectors/productsSelectedSelectors';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import NotProducts from '../../components/NotProducts/NotProducts';
import './ResumePage.scss';

const ProductContaner = ({productsToBuy}) => {
  return (
    <div className='resume-section'>
      <div className='products-container'>
        {
          productsToBuy.map(product => (
            <ProductDetail key={product.slug} product={product} />
          ))
        }
      </div>
      <div className='price-section'>
        TOTAL
      </div>
    </div>
  )
}

const ResumePage = () => {
  const productsToBuy = useSelector(selectedProducts);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    if(productsToBuy.lenght) {
      setShowProducts(true);
    }else {
      setShowProducts(false);
    }
  }, [productsToBuy])
  

  return (
    <div className='resume-page'>
      <div className='title-container'>
        <h1 className='title'>Your products</h1>
      </div>
        {
          showProducts
          ? <ProductContaner ProductContaner={ProductContaner} />
          : <NotProducts />
        }
    </div>
  )
}

export default ResumePage;