import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProducstPage from '../products/presentation/pages/ProducstPage';
import PaymentPage from '../payments/presentation/pages/PaymentPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='products' element={<ProducstPage />} />
      <Route path='payment' element={<PaymentPage />} />
      <Route path="*" element={<div>NOT FOUNT</div>} />
    </Routes>
  )
};

export default AppRouter;