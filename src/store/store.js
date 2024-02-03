import { configureStore } from '@reduxjs/toolkit'
import { ProductsSlice } from '../products/application/slices/productsSlice'

export const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  }
})