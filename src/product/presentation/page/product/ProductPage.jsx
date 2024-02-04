import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../../../catalog/application/selectors/productsSelectors';
import './productPage.scss';
import TextInfo from '../../../../shared/presentation/components/TextInfo/TextInfo';
import { selectedProducts } from '../../../application/selectors/productsSelectedSelectors';
import { addProduct } from '../../../application/slices/productSlice';
import { getValueFromLocalStorage, setValueToLocalStorage } from '../../../../shared/helpers/helpers';
import { PRODUCT_SELECTED } from '../../../../shared/helpers/constants';
import ShowList from '../../../../shared/presentation/components/ShowList/ShowList';
import { resumeRoute } from '../../../../resume/infrastruture/routes';
import { productsRoute } from '../../../../catalog/infrastructure/routes';

const ProductPage = () => {
  const [productSelected, setProductSelected] = useState({});
  const [purchaseBtn, setPurchaseBtn] = useState(false);
  const { slug } = useParams();
  const productsInLS = JSON.parse(getValueFromLocalStorage(PRODUCT_SELECTED) || '[]');
  const products = useSelector(selectProducts);
  const productsToBuy = useSelector(selectedProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(slug){
      const product = products.find(product => product.slug === slug);
      if(!product?.name) {
        navigate(productsRoute);
      }
      setProductSelected(product);
    }
  }, [slug, products])

  useEffect(() => {
    let productSelected;
    if(productsToBuy.length){
      productSelected = productsToBuy.find(product => product.slug === slug);
    }else if(productsInLS.length){
      productSelected = productsInLS.find(product => product.slug === slug);
    }
    setPurchaseBtn(!!productSelected);
  }, [slug, productsToBuy, setPurchaseBtn])

  const addItem = () => {
    dispatch(addProduct(productSelected));
    setValueToLocalStorage(PRODUCT_SELECTED, JSON.stringify([...productsInLS, productSelected]));
  };

  const navigateTo = (route) => navigate(route);

  return (
    <div className='product-container'>
      <div className='img-container'>
        <img src={productSelected.img} alt={productSelected.name} />
      </div>
      <div className='info-container'>
        <div className='card-text'>
          <h3>{productSelected.name}</h3>
          <TextInfo label={'Price'} text={`$${productSelected.price}`} />
          <ShowList list={productSelected.gender} title={'Gender'} className={'gender'} />
          <TextInfo label={'Description'} text={productSelected.description} />
          <TextInfo label={'Stoke'} text={productSelected.stoke ? 'Available' : 'No available'} />
        </div>
        <div className='btn-section'>
          <button className='back' onClick={() => navigateTo(productsRoute)}>Go to products</button>
          
          {
            purchaseBtn
            ? <button className='purchase' onClick={() => navigateTo(resumeRoute)} >Go to purchase</button>
            : <button className='buy' onClick={addItem} >Add item</button>
          }
        </div>
      </div>
    </div>
  )
};

export default ProductPage;