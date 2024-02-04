import React from 'react';
import { useSelector } from 'react-redux';
import { selectFormData } from '../../../../payments/application/selector.js/paymentSelectors';

const BillingPage = () => {
  const formData = useSelector(selectFormData);
  console.log('formData', formData);
  return (
    <div>BillingPage</div>
  )
}

export default BillingPage