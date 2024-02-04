import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PaymentPage from '../payments/presentation/pages/PaymentPage';
import CatalogPage from '../catalog/presentation/pages/catalog/CatalogPage';
import ProductPage from '../product/presentation/page/product/ProductPage';
import ResumePage from '../resume/presentation/page/ResumePage/ResumePage';
import { productsRoute } from '../catalog/infrastructure/routes';
import { paymentRoute } from '../payments/infrastructure/routes';
import { productRoute } from '../product/infrastructure/routes';
import { resumeRoute } from '../resume/infrastruture/routes';
import { appRoute, notFound } from './routes';
import { billingRoute } from '../billing/infrastructure/routes';
import BillingPage from '../billing/presentation/pages/BillingPage/BillingPage';
import NotFound from '../notFound/presentation/page/NotFoundPage';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={productsRoute} element={<CatalogPage />} />
        <Route path={productRoute()} element={<ProductPage />} />
        <Route path={resumeRoute} element={<ResumePage />} />
        <Route path={paymentRoute} element={<PaymentPage />} />
        <Route path={billingRoute} element={<BillingPage />} />
        <Route path={appRoute} element={<Navigate to={productsRoute} />} />
        <Route path={notFound} element={<NotFound />} />
        <Route path="*" element={<Navigate to={notFound} />} />
      </Routes>
    </>
  )
};

export default AppRouter;