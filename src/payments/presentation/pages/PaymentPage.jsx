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
    setpaymentMethod(e.target.value)
  }

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