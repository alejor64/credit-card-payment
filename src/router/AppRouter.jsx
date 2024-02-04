import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PaymentPage from '../payments/presentation/pages/PaymentPage';
import { Navbar } from '../ui/components/Navbar';
import CatalogPage from '../catalog/presentation/pages/catalog/CatalogPage';
import ProductPage from '../product/presentation/page/product/ProductPage';
import ResumePage from '../resume/presentation/page/ResumePage/ResumePage';
import { productsRoute } from '../catalog/infrastructure/routes';
import { paymentRoute } from '../payments/infrastructure/routes';
import { productRoute } from '../product/infrastructure/routes';
import { resumeRoute } from '../resume/infrastruture/routes';
import { appRoute, notFound } from './routes';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={productsRoute} element={<CatalogPage />} />
        <Route path={productRoute()} element={<ProductPage />} />
        <Route path={resumeRoute} element={<ResumePage />} />
        <Route path={paymentRoute} element={<PaymentPage />} />
        <Route path={appRoute} element={<Navigate to={productsRoute} />} />
        <Route path={notFound} element={<div>NOT FOUNT</div>} />
        <Route path="*" element={<Navigate to={notFound} />} />
      </Routes>
    </>
  )
};

export default AppRouter;