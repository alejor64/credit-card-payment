import { configureStore } from '@reduxjs/toolkit'
import { ProductsSlice } from '../catalog/application/slices/productsSlice'
import { ProductSlice } from '../product/application/slices/productSlice'
import { PaymentSlice } from '../payments/application/slices/paymenthSlice'

export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
    productsSelected: ProductSlice.reducer,
    formData: PaymentSlice.reducer,
  }
})