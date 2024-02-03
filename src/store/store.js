import { configureStore } from '@reduxjs/toolkit'
import { ProductsSlice } from '../catalog/application/slices/productsSlice'

export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  }
})