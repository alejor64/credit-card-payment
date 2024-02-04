import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedProducts } from '../../../product/application/selectors/productsSelectedSelectors';
import Select from '../../../shared/presentation/components/Select/Select';
import { PAYMENT_METHOD_OPTIONS } from '../../application/constants';
import CardForm from '../components/CardForm/CardForm';

const PaymentPage = () => {
  const productsToBuy = useSelector(selectedProducts);
  const [paymentMethod, setpaymentMethod] = useState('');

  const onChageSelect = (e) => {
    console.log('Event', e.target.value)
    setpaymentMethod(e.target.value)
  }

  console.log('productsToBuy', productsToBuy);
  return (
    <div>
      <h1>Paymente info</h1>
      <Select title='Select you payment method' onChange={onChageSelect} options={PAYMENT_METHOD_OPTIONS} />
      {
        !paymentMethod && <CardForm />
      }
    </div>
  )
};

export default PaymentPage;