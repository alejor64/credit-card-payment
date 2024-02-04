import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../../../product/application/selectors/productsSelectedSelectors';
import NotProducts from '../../components/NotProducts/NotProducts';
import { getValueFromLocalStorage } from '../../../../shared/helpers/helpers';
import { PRODUCT_SELECTED } from '../../../../shared/helpers/constants';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import Loading from '../../../../shared/presentation/components/Loading/Loading';
import './ResumePage.scss';
import { setProducts } from '../../../../product/application/slices/productSlice';

const IsLoadingProducts = ({isLoading}) => {
  return (
    <>
      {
        isLoading
        ? <Loading />
        : <NotProducts />
      }
    </>
  )
}

const ResumePage = () => {
  const dispatch = useDispatch();
  const productsToBuy = useSelector(selectedProducts);
  const [productsSelected, setProductsSelected] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!productsToBuy.length) {
      const productInLS = JSON.parse(getValueFromLocalStorage(PRODUCT_SELECTED));
      if(productInLS.length) {
        setProductsSelected(productInLS);
        dispatch(setProducts(productInLS));
        setShowProducts(true);
        setIsLoading(false);
      }else {
        setShowProducts(false);
        setIsLoading(false);
      }
    }else {
      setProductsSelected(productsToBuy);
      setShowProducts(true);
      setIsLoading(false);
    }
  }, [productsToBuy])
  

  return (
    <div className='resume-page'>
      <div className='title-container'>
        <h1 className='title'>Your products</h1>
      </div>
        {
          showProducts && !isLoading
          ? <ResumeSection products={productsSelected} />
          : <IsLoadingProducts isLoading={isLoading} />
        }
    </div>
  )
}

export default ResumePage;