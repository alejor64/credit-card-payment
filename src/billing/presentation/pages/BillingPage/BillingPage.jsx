import React, { useEffect, useState } from 'react';
import './BillingPage.scss';
import { getValueFromLocalStorage, removeValueFromLocalStorage } from '../../../../shared/helpers/helpers';
import { FROM_DATA } from '../../../../shared/helpers/constants';
import { useNavigate } from 'react-router-dom';
import { productsRoute } from '../../../../catalog/infrastructure/routes';

const BillingPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const formData = JSON.parse(getValueFromLocalStorage(FROM_DATA), '{}');
    if(formData?.userName){
      setFormData(formData);
    }else {
      navigate(productsRoute);
    }
  }, [])

  const goProducts = () => {
    removeValueFromLocalStorage(FROM_DATA);
    navigate(productsRoute)
  };

  return (
    <div className='billing-section'>
      <div className='billing-container'>
        <div className='title-container'>
          <h1 className='title'>You billing details</h1>
        </div>
        <div className='details-info'>
          <p>Hello {formData?.userName}, thank you for buying in our comerce</p>
          <p>your products will be send to {formData?.address}, {formData?.city}, {formData?.state}</p>
        </div>
        <div className='button-section'>
          <button className='btn' onClick={goProducts}>Go to products</button>
        </div>
      </div>
    </div>
  )
};

export default BillingPage;