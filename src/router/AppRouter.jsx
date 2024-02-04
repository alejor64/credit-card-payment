import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PaymentPage from '../payments/presentation/pages/PaymentPage';
import { Navbar } from '../ui/components/Navbar';
import CatalogPage from '../catalog/presentation/pages/catalog/CatalogPage';
import ProductPage from '../product/presentation/page/product/ProductPage';
import ResumePage from '../resume/presentation/page/ResumePage/ResumePage';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='products' element={<CatalogPage />} />
        <Route path='products/:slug' element={<ProductPage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='payment' element={<PaymentPage />} />
        <Route path="*" element={<div>NOT FOUNT</div>} />
        <Route path='/' element={<Navigate to='products' />} />
      </Routes>
    </>
  )
};

export default AppRouter;