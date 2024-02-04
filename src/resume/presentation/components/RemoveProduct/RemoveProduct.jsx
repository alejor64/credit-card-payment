import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../../product/application/slices/productSlice';
import './RemoveProduct.scss';
import { setValueToLocalStorage } from '../../../../shared/helpers/helpers';
import { PRODUCT_SELECTED } from '../../../../shared/helpers/constants';
import { selectedProducts } from '../../../../product/application/selectors/productsSelectedSelectors';

const RemoveProduct = ({product}) => {
  const dispatch = useDispatch();
  const productsToBuy = useSelector(selectedProducts);

  const deleteProduct = () => {
    const products = productsToBuy.filter(productLS => productLS.slug !== product.slug);
    setValueToLocalStorage(PRODUCT_SELECTED, JSON.stringify(products));
    dispatch(setProducts(products));
  };

  return (
    <div className='remove-product-container'>
      <div className='btn-remove' onClick={deleteProduct}>
        <span>X</span>
      </div>
    </div>
  )
};

export default RemoveProduct;