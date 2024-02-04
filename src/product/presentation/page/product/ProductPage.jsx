import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../../../catalog/application/selectors/productsSelectors';
import './productPage.scss';
import { TextInfo } from '../../../../shared/presentation/components/TextInfo/TextInfo';
import { selectedProducts } from '../../../application/selectors/productsSelectedSelectors';
import { addProduct } from '../../../application/slices/productSlice';
import { getValueFromLocalStorage, setValueToLocalStorage } from '../../../../shared/helpers/helpers';
import { PRODUCT_SELECTED } from '../../../../shared/helpers/constants';

const ShowList = ({list, title, className = ''}) => {
  return (
    <div className={`list-container ${className}`}>
      <label>{title}: </label>
      <div className='list-wrapper'>
        {
          list?.map(itm => (
            <div key={itm} className='list'>
              <span>{itm}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const ProductPage = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  const { slug } = useParams();
  const products = useSelector(selectProducts);
  const productsToBuy = useSelector(selectedProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(slug){
      const product = products.find(product => product.slug === slug);
      if(!product?.name) {
        navigate(`/products`);
      }
      setProductSelected(product);
    }
  }, [slug, products])

  useEffect(() => {
    const showRemoveItem = productsToBuy.find(product => product.slug === slug);
    setShowRemoveBtn(!!showRemoveItem);
  }, [slug, productsToBuy, setShowRemoveBtn])

  const goBack = () => {
    navigate(`/products`);
  };

  const addItem = () => {
    dispatch(addProduct(productSelected));
    const productsInLS = getValueFromLocalStorage(PRODUCT_SELECTED) || [];
    setValueToLocalStorage(PRODUCT_SELECTED, JSON.stringify([...productsInLS, productSelected]));
  };

  const goPurchase = () => {
    navigate('/resume');
  }

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
          <button className='back' onClick={goBack}>Go to products</button>
          
          {
            showRemoveBtn
            ? <button className='purchase' onClick={goPurchase} >Go to purchase</button>
            : <button className='buy' onClick={addItem} >Add item</button>
          }
        </div>
      </div>
    </div>
  )
};

export default ProductPage;