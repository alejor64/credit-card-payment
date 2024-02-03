import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from '../catalog/presentation/pages/catalog/CatalogPage';
import PaymentPage from '../payments/presentation/pages/PaymentPage';
import { Navbar } from '../ui/components/Navbar';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='catalog' element={<CatalogPage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path="*" element={<div>NOT FOUNT</div>} />
        <Route path='/' element={<Navigate to='catalog' />} />
      </Routes>
    </>
  )
};

export default AppRouter;